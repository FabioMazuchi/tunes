import styled from 'styled-components';

export const Main = styled.main`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Error = styled.span`
	color: #f56a6a;
  margin-top: 8px;
  font-size: 16px;
  @media (max-width: 290px) {
    font-size: 14px;
	}
`;

export const Section = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 70%;
	@media (max-width: 900px) {
		flex-direction: column;
	}
  @media (max-width: 660px) {
    width: 90%;
		flex-direction: column;
	}
  @media (max-width: 290px) {
    width: 90%;
		flex-direction: column;
    text-align: center;
	}
`;

export const Div = styled.div`
  width: 50%;
	color: aliceblue;
	@media (max-width: 900px) {
    width: 100%;
    text-align: center;
	}
`;

export const Ul = styled.ul`
	list-style-type: none;
  margin-top: 15px;
`;

export const Li = styled.li`
	margin-bottom: 7px;
  font-size: 18px;
  @media (max-width: 290px) {
    font-size: 14px;
	}
`;

export const Form = styled.form`
	display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  width: 45%;
  align-items: center;
	@media (max-width: 900px) {
		width: 65%;
    text-align: center;
		margin-top: 30px;
	}
  @media (max-width: 500px) {
		width: 95%;
		margin-top: 30px;
	}
`;

export const Label = styled.label`
	color: white;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 290px) {
    font-size: 16px;
	}
`;

export const Input = styled.input`
	width: 100%;
  font-size: 16px;
  padding: 3px 0;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  outline: 0;
  color: white;
  margin: 8px 0;
`;

export const Button = styled.button`
  font-size: 16px;
  background-color: #c561a5;
  border: 0;
  color: white;
  cursor: pointer;
  padding: 3px 12px;
  border-radius: 14px;
  transition: 0.5s;
  cursor: pointer;
  
  &:hover {
	background-color: #a4558b;
  };
`;


