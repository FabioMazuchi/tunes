import { useNavigate } from "react-router-dom";
import { AlbumProps } from "../../types";
import { Aga3, DivExterrnal, DivInterrnal, Paragraph } from "./styles";

export default function AlbumCard({ album: { artworkUrl100, collectionName, artistName, collectionId }}: AlbumProps) {
  const navigate = useNavigate();
  
  return (
    <DivExterrnal onClick={() => navigate(`/album/${collectionId}`)}>
      <img src={artworkUrl100} alt={artistName}/>
      <DivInterrnal>
        <Aga3>{artistName}</Aga3>
        <Paragraph>{collectionName}</Paragraph>
      </DivInterrnal>
    </DivExterrnal>
  );
}
