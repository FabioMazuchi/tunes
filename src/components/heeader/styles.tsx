import styled from 'styled-components';

export const HeaderStld = styled.header`
  display: flex;
  padding: 8px 2%;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(81, 79, 79, 0.35) 0px 5px 15px;
`;

export const Logo = styled.h1`
  font-size: 22px;
  letter-spacing: 1px;
  color: #c561a5; 
  text-decoration: none;
  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  @media (max-width: 290px) {
    width: 110px;
    font-size: 12px;
	}
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Aga3 = styled.h3`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  background-color: #4e4b4b;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #7b7979;
  }
`;