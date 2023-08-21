import { useEffect, useState } from "react";
import { Aga1, Button, Form, Image, InputFile, InputName, Label, LabelName, Main, Span } from "./styles"
import { useNavigate } from "react-router-dom";
import { readUser, saveUser } from "../../services/userApi";
import ProfileLink from "../../components/profileLink";

export const ProfileEdit = () => {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const navigate = useNavigate();

  useEffect(() => {
    const getUser = () => {   
      try {
        const {name, image} = readUser();
        setName(name) 
				setImage(image)
      } catch (e) {
        navigate('/tunes');
      }
    }
    getUser()
  }, [navigate])

	const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {target} = e;
		if (target.files !== null) {
			const result = URL.createObjectURL(target.files[0])
			setImage(result)
		}
	}

	const save = () => {
		saveUser({name, image})
		navigate('/profile/edit');
	}

	return (
		<Main>
			<Aga1>Profile Edit</Aga1>
			<Form>
				<Label htmlFor="arquivo">
					{image ? (
						<Image src={image}/>
					) : <ProfileLink big /> }
					<Span>Select Image</Span>
					<InputFile 
						onChange={upload}
						id="arquivo" 
						type="file"
						accept="image/*"
					/>
				</Label>
				<LabelName>
					Nome:
					<InputName 
						onChange={({ target }) => setName(target.value)}
						value={name}
						placeholder="Mínimo três letras"
					/>
				</LabelName>
				<Button onClick={save} type="button">Salvar</Button>
			</Form>
		</Main>
	)
}