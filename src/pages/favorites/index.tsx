import { Main, Section , Ul, Li, Img, Div, Aside, AlbumDescription, Aga3, Player, DivPlayer, Paragraph, Span, NotMusicFavorites, Aga1, Aga2, Aga4, Heart } from "./styles"
import { readFavoriteMusic, removeFavorite, saveFavoriteMusic } from "../../services/favoriteMusic";
import { useEffect, useState } from "react";
import { MusicType } from "../../types";
import Loading from "../../components/loading";
import { MdSkipPrevious, MdPause, MdSkipNext } from 'react-icons/md';
import { IoIosHeartDislike } from 'react-icons/io';
import { AiOutlineHeart, AiOutlinePlayCircle, AiTwotoneHeart } from 'react-icons/ai';

export const Favorites = () => {
	const [musics, setMusics] = useState<MusicType[]>([]);
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(0);
	const [play, setPlay] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);
	const [track, setTrack] = useState<HTMLAudioElement>();

	useEffect(() => {
		const requestMusics = () => {
			try {
				setLoading(true);
				const response = readFavoriteMusic();
				response.sort((a: MusicType, b: MusicType) => a.trackNumber - b.trackNumber)
				const { previewUrl } = response[0];
				verifyIsFavorite(response);
				setTrack(new Audio(previewUrl))
				setMusics(response);
				setLoading(false);
			} catch (error) {
				setMusics([]);
				setLoading(false);
			}
		}
		requestMusics();
	}, [isFavorite])

	useEffect(() => {
		verifyIsFavorite(musics);
	}, [index]);

	const verifyIsFavorite = (musics: MusicType[]) => {
		if (musics.length > 0) {
			const { trackId } = musics[index];
			const favoritesMusic = readFavoriteMusic();
			const result = favoritesMusic.some(({trackId: id}) => trackId === id);
			setIsFavorite(result);
		}
	}	

	const start = () => {
    const audio = new Audio(musics[index].previewUrl);
    audio.play();
		setPlay(true);
		setTrack(audio);
  }

	const pause = () => {
		if (track) track.pause();
		setPlay(false);
  }

	const proxima = () => {
    setIndex(index + 1 < musics.length ? index + 1 : 0 )
		pause();
  }

	const anterior = () => {
    setIndex(index - 2 < 0 ? musics.length - 1 : index - 1);
	}

	const handleClick = () => {
		const result = musics[index];
		saveFavoriteMusic(result);
		verifyIsFavorite(musics)
	}

	const removeFavMusic = () => {
		removeFavorite(musics[index]);
		verifyIsFavorite(musics)
	}

	if (loading) return <Loading />

	return (
		<Main>
			{(musics.length > 0 && !loading) ? (
				<>
					<Aside>
						<Aga2>Músicas Favoritas <Heart><AiTwotoneHeart /></Heart></Aga2>
						<Ul>
							{musics.map(({ trackName, trackNumber }) => (<Li>{`${trackNumber} - ${trackName}`}</Li>))}
						</Ul>
					</Aside>
					<Section>
						<AlbumDescription>
							<Img src={musics[index].artworkUrl100} alt={musics[index].artistName} />
							<Div>
								<Aga1>{musics[index].artistName}</Aga1>
								<Aga3>{musics[index].collectionName}</Aga3>
							</Div>
						</AlbumDescription>
						<Player>
							<Paragraph>
								{musics[index].trackName}
								{isFavorite ? (
									<Span><AiTwotoneHeart onClick={removeFavMusic}/></Span>
								) : (
									<Span><AiOutlineHeart onClick={handleClick}/></Span>
								)}
							</Paragraph>
							<DivPlayer>
								<MdSkipPrevious onClick={anterior} />
								{!play ? (
									<AiOutlinePlayCircle onClick={start} />
								) : (
									<MdPause onClick={pause} />
								)}
								<MdSkipNext onClick={proxima} />
							</DivPlayer>
							<Aga4>{index+1}/{musics.length}</Aga4>
						</Player>
						<audio src={ musics[index].previewUrl }>
							<track kind="captions" />
							<code>audio</code>
						</audio>
					</Section>
				</>
				) : <NotMusicFavorites>Não há músicas favoritas <IoIosHeartDislike /></NotMusicFavorites>}
		</Main>
	)
}