import { GiCheckMark } from 'react-icons/gi';
import { Button, Div, Error, Form, Input, Label, Li, Main, Section, Ul } from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../services/userApi';
import Logotipo from '../../components/logotipo';

export const Login = () => {
	const [name, setName] = useState('');
	const [error, setError] = useState(false);
	const navigate = useNavigate()

	const handleClick = () => {
		if (name.length < 3) {
			setError(true);
		} else {
			saveUser({ name, image: '' })
			navigate('/home');
		}
	}

	return (
		<Main>
			<Section>
				<Div>
					<Logotipo />
					<Ul>
						<Li><GiCheckMark /> Pesquise pelo seu artista favorito</Li>
						<Li><GiCheckMark /> Ouça as músicas de um álbum (30s)</Li>
						<Li><GiCheckMark />Confira os nomes das músicas em um álbum</Li>
					</Ul>
				</Div>
				<Form>
					<Label htmlFor="nome">
						Qual é o seu nome ?
						{error && <Error>O nome precisa ter pelo menos três letras!</Error>}
						<Input
							type="text"
							value={name}
							onChange={({ target }) => setName(target.value)}
							placeholder="Mínimo três letras"
						/>
					</Label>
					<Button onClick={handleClick} type="button">Entrar</Button>
				</Form>
			</Section>
		</Main>
	)
}