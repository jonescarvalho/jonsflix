import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const Button = styled(Link)`
const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export const ButtonLeft = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  margin-left:7px;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Button;
