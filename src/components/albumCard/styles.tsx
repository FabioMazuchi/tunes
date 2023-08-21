import styled from 'styled-components';

export const DivExterrnal = styled.div`
  display: flex;
  cursor: pointer;
  flex-basis: 32%;
  margin-bottom: 14px;
  transition: 0.4s;
  box-shadow: rgba(225, 225, 230, 0.25) 0px 2px 5px -1px, rgba(212, 207, 207, 0.3) 0px 1px 3px -1px;
  
  &:hover {
    background-color: #424040;
  }
  
  @media (max-width: 600px) {
    flex-basis: 48%;
    margin-bottom: 18px;
	}
  @media (max-width: 400px) {
    flex-basis: 98%;
	}
`;

export const DivInterrnal = styled.div`
  padding: 6px;
  color: #c9c8c5;
`;

export const Aga3 = styled.h3`
  margin-bottom: 4px;
`;

export const Paragraph = styled.p`
  margin-bottom: 4px;
  font-style: italic;
`;

