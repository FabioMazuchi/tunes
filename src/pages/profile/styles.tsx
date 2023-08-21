import styled from 'styled-components';

export const Main = styled.main`
	height: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0 2%;
  @media (max-width: 900px) {
    margin: 0;
	}
`;

export const Aga1 = styled.h1`
	font-size: 35px;
	color: white;
	margin: 20px 0 60px;
	@media (max-width: 900px) {
		font-size: 26px;
	}
	@media (max-width: 400px) {
		font-size: 20px;
	}
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Nome = styled.h2`
	color: white;
	margin-top: 10px;
`;

export const EditLink = styled.span`
	color: white;
	margin: 25px 0 0;
`;

