import { useState } from "react"
import { Aga4, Button, Form, Input, Main, Section } from "./styles"
import searchAlbumsAPI from "../../services/searchAlbumsAPI";
import { AlbumType } from "../../types";
import AlbumCard from "../../components/albumCard";
import './home.css';

export const Home = () => {
	const [artista, setArtista] = useState('');
	const [loading, setLoading] = useState(false);
	const [pesquisou, setPesquisou] = useState(false);
	const [validate, setValidate] = useState(false);
	const [albuns, setAlbuns] = useState<AlbumType[]>([]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setArtista(e.target.value)
		setPesquisou(false)
	
	}
	
	const handleClick = async () => {
		if (!artista) {
			setValidate(true)
			setAlbuns([])
		} else {
			setLoading(true)
			setAlbuns(await searchAlbumsAPI(artista));
			setLoading(false)
			setPesquisou(true)
			setValidate(false)
		}
	}

	return (
		<Main>
			<Form>
				<Input
					onChange={handleChange}
					value={artista}
					type="text"
					placeholder="Pesquisar por artista, banda..."
				/>
				<Button onClick={handleClick} type="reset">{loading ? 'Loading...' : 'Pesquisar'}</Button>
			</Form>
			{validate && <Aga4>Insira o valor no campo de pesquisa e clique em Pesquisar</Aga4>}
			{(pesquisou && albuns.length === 0) && <Aga4>{`Não encontrei álbuns de ${artista}`}</Aga4>}
			{(pesquisou && albuns.length > 0) && <Aga4>{`Foram encontrados ${albuns.length} álbuns de ${artista}`}</Aga4>}
			
			<Section>
			{albuns.map((album) => (
					<AlbumCard key={album.collectionId} album={album} />
				))}
			</Section>
		</Main>
	)
}