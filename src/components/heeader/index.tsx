import { GiMusicSpell } from 'react-icons/gi';
import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';
import { Div, HeaderStld, Logo, Nav, Span } from './styles';
import ProfileLink from '../profileLink';

export default function Header() {
	const navigate = useNavigate();

  return (
    <HeaderStld>
      <Logo onClick={() => navigate('/home')}>Tunes<Span><GiMusicSpell /></Span></Logo>
      <Nav>
        <NavLink to='/home'>Procurar</NavLink>
        <NavLink to='/favorites'>Favoritas</NavLink>
			</Nav>
      <Div>
        <ProfileLink />
      </Div>
    </HeaderStld>
  );
}
