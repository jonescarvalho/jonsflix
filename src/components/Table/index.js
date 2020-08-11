import styled from 'styled-components';

export const Table = styled.table`
  color: var(--white);
  border: 1px solid var(--white);
  width:100%;
  /* box-sizing: border-box; */
  padding: 5px 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  /* outline: none;
  border-radius: 5px; */
  
`;

export const Tr = styled.tr`
border: 1px solid white;
  &:nth-child(even) {background-color: #fff;}
`;

export const TdExcluir = styled.td`
    border: 1px solid red;
    background-color: red;
    cursor: pointer;
  &:hover {background-color: #E06262;}
`;
export const TdAlterar = styled.td`
    border: 1px solid blue;
    box-sizing: border-box;
    background-color: blue;
    cursor: pointer;
  &:hover {background-color: #6A71FC;}
`;

export const Td = styled.td`
    border-bottom: 1px solid white;    
  &:hover {background-color: #FF5733;}
`;



