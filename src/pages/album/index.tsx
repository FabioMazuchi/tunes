import { useParams } from "react-router-dom"
import { Main, Section , Ul, Li, Img, Div, Aside, AlbumDescription, Aga3, Player, DivPlayer, Paragraph, Span, Aga1, Aga4} from "./styles"
import { getMusics } from "../../services/musicApi";
import { useEffect, useState } from "react";
import { MusicType } from "../../types";
import { MdSkipPrevious, MdPause, MdSkipNext } from 'react-icons/md';
import { AiOutlineHeart, AiOutlinePlayCircle, AiTwotoneHeart } from 'react-icons/ai';
import { readFavoriteMusic, removeFavorite, saveFavoriteMusic } from "../../services/favoriteMusic";
import Loading from "../../components/loading";

export const Album = () => {
	const { id } = useParams();
	const [musics, setMusics] = useState<MusicType[]>([]);
	const [index, setIndex] = useState(0);
	const [play, setPlay] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);
	const [loading, setLoading] = useState(false);
	const [track, setTrack] = useState<HTMLAudioElement>();

	useEffect(() => {
		const requestMusics = async () => {
			if (id) {
				setLoading(true);
				const response = await getMusics(id);
				response.sort((a: MusicType, b: MusicType) => a.trackNumber - b.trackNumber)
				const result = response.filter(({ kind }: MusicType) => kind !== undefined)
				verifyIsFavorite(result);
				setMusics(result);
				setLoading(false);
			} 
		}
		requestMusics();
	}, [id])

	useEffect(() => {
		verifyIsFavorite(musics);
	}, [index]);

	const verifyIsFavorite = (musics: MusicType[]) => {
		if (musics.length > 0) {
			const { trackId } = musics[index];
			const favoritesMusic = readFavoriteMusic();
			const result = favoritesMusic.some(({trackId: id}) => trackId === id);
			setIsFavorite(result);
			return result;
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
    setIndex(index - 1 < 0 ? musics.length - 1 : index - 1);
		pause();
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
			{musics.length > 0 && (
				<>
					<Aside>
						<h1>Musics</h1>
						<Ul>
							{musics.map(({ trackName, trackNumber, trackId }) => (<Li key={trackId}>{`${trackNumber} - ${trackName}`}</Li>))}
						</Ul>
					</Aside>
					<Section>
						<AlbumDescription>
							<Img src={musics[0].artworkUrl100} alt={musics[0].artistName} />
							<Div>
								<Aga1>{musics[0].artistName}</Aga1>
								<Aga3>{musics[0].collectionName}</Aga3>
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
				)}
		</Main>
	)
}