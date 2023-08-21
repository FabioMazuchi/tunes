import styled from 'styled-components';

export const Main = styled.main`
	margin: 20px 0;
	height: auto;
	display: flex;
	flex-direction: column;
	padding: 0 2%;
  @media (max-width: 900px) {
    margin: 0;
	}
`;

export const Aga4 = styled.h4`
	margin-top: 20px;
  text-align: center;
  color: white;
  font-weight: lighter;
`;

export const Form = styled.form`
	width: 35%;
  flex-direction: row;
  display: flex;
  margin: 20px auto 0;
  @media (max-width: 900px) {
    width: 50%;
	}
  @media (max-width: 600px) {
    width: 90%;
	}
`;

export const Input = styled.input`
  width: 100%;
  font-size: 15px;
  padding: 6px 8px;
  margin-right: 14px;
  outline: 0;
  border: none;
  border-radius: 14px;
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 2px 0;
  width: 100px;
  background-color: #c561a5;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 14px;
  transition: 0.5s;
  &:hover {
	background-color: #984a80;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  margin: 50px 0;
  justify-content: space-around;
  flex-wrap: wrap;
`;




