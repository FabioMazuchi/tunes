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
	margin: 20px 0;
	@media (max-width: 900px) {
		font-size: 26px;
	}
	@media (max-width: 400px) {
		font-size: 20px;
	}
`;

export const Form = styled.form`
	display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
	width: 25%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const LabelName = styled.label`
	display: flex;
	color: white;
	font-size: 18px;
`;

export const InputFile = styled.input`
	display: none;
`;

export const Span = styled.span`
	margin-top: 8px;
	color: white;
	transition: 0.3s;
	&:hover {
		color: #e2aed1;
	}
`;

export const InputName = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
	padding-left: 4px;
  font-size: 17px;
  outline: none;
	margin-left: 8px;
	&::placeholder {
		font-size: 16px;
	}
`;

export const Button = styled.button`
  margin-top: 20px;
  font-size: 16px;
  width: 80px;
  background-color: #8d4c78;
  border: 0;
  color: white;
  cursor: pointer;
  padding: 5px 0;
  border-radius: 14px;
  transition: 0.5s;
`;

export const Image = styled.img`
  border: 2px solid #c561a5;
  width: 125px;
  height: 125px;
  border-radius: 50%;
`;