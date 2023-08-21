import { useEffect, useState } from "react";
import ProfileLink from "../../components/profileLink";
import { Aga1, EditLink, Main, Nome, Section } from "./styles"
import { Link, useNavigate } from "react-router-dom";
import { readUser } from "../../services/userApi";

export const Profile = () => {
	const [name, setName] = useState('');
	const navigate = useNavigate();

  useEffect(() => {
    const getUser = () => {   
      try {
        const user = readUser();
        setName(user.name) 
      } catch (e) {
        navigate('/tunes');
      }
    }
    getUser()
  })

	return (
		<Main>
			<Aga1>Profile</Aga1>
			<Section>
				<ProfileLink big={true}/>
				<Nome>{name}</Nome>
			</Section>
			<EditLink>
				<Link to='/profile/edit'>
					Profile Edit
				</Link>
			</EditLink>
		</Main>
	)
}