import styled, { css } from 'styled-components';

export const Main = styled.main`
	min-height: 100%;
	display: flex;
`;

export const Aside = styled.aside`
	width: 40%;
	padding: 20px 10px;
	background-color: #4b4d4d;
	color: white;
	overflow: auto;
	@media (max-width: 700px) {
    	display: none;
	}
`;

export const Aga2 = styled.h2`
	font-size: 27px;
	display: flex;
	align-items: flex-end;
`;

export const Ul = styled.ul`
	list-style-type: none;
	margin-top: 15px;
`;

export const Li = styled.li`
	margin-bottom: 8px;
	font-size: 14px;
`;

export const Section = styled.section`
	grid-area: album;
	width: 100%;
	padding: 20px 15px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	@media (max-width: 430px) {
		justify-content: space-around;
	}
`;

export const AlbumDescription = styled.div`
	width: 100%;
	display: flex;
	color: white;
	justify-content: space-around;
	@media (max-width: 500px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
	}
`;

export const Img = styled.img`
	width: 130px;
	height: 130px;
`;

export const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	color: white;
	font-size: 1.5rem;
	@media (max-width: 500px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
		margin-top: 10px;
		text-align: center;
	}
`;

export const Aga1 = styled.h1`
	font-size: 35px;
	@media (max-width: 900px) {
		font-size: 26px;
	}
	@media (max-width: 400px) {
		font-size: 20px;
	}
`;

export const Aga3 = styled.h3`
	font-style: italic;
	font-weight: lighter;
	@media (max-width: 900px) {
    	font-size: 20px;
	}
	@media (max-width: 400px) {
		font-size: 17px;
	}
	@media (max-width: 290px) {
    	font-size: 15px;
	}
`;

export const Aga4= styled.h4`
	margin-top: 10px;
	color: white;
	text-align: center;
	font-size: 20px;
`;

export const Player = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	font-size: 1.5rem;
	align-items: center;
`;

export const DivPlayer = styled.div`
	display: flex;
	color: white;
	margin-top: 20px;
	font-size: 3rem;
	width: 30%;
	justify-content: space-around;
`;

export const Paragraph = styled.p`
	display: flex;
	color: white;
	align-items: flex-start;
	text-align: center;
	font-size: 1.2rem;
`;

export const Span = styled.span<{ $primary?: boolean }>`
	margin-left: 8px;
	color: #c561a5;
	font-size: 1.4rem;
	cursor: pointer;

	${props =>
	props.$primary &&
	css`
		color: white;
	`}
`;

export const NotMusicFavorites = styled.h1`
	display: flex;
	align-items: center;
	margin: 30px auto;
	color: white;
	font-size: 2rem;
	@media (max-width: 390px) {
    	font-size: 25px;
	}
	@media (max-width: 290px) {
    	font-size: 20px;
	}
`;