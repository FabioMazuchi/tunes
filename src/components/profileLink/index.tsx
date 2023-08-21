import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { readUser } from "../../services/userApi";
import { Aga3, Image } from "./styles";

type ProfileLinkProps = {
  big?: boolean;
};

export default function ProfileLink({big}: ProfileLinkProps) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

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
  })

  if (image) {
    return (
      <>
      {big ? (
        <Image $big onClick={() => navigate('/profile')} src={image}/>
      ) : <Image onClick={() => navigate('/profile')} src={image}/>}
      </>
    )
  }

  return  (
    <>
     {big ? (
       <Aga3 $big>{name.toUpperCase().split(' ')[0][0]}</Aga3>
     ) : (
      <Aga3 onClick={() => navigate('/profile')}>{name.toUpperCase().split(' ')[0][0]}</Aga3>
     )}
    </>
  )
}
