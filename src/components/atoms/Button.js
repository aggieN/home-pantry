import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0.3rem 2rem;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  border-radius: 1rem;
  height: 4rem;
  min-width: 10rem;
  transition: all 0.5s 0.1s ease;
  cursor: pointer;
  outline: none;
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
  margin-top: 3rem;

  &:hover {
    transform: scale(1.1);
    box-shadow: -1px 5px 5px rgba(0, 0, 0, 0.5);
  }
  ${({ secondary }) =>
    secondary &&
    css`
      height: 5rem;

      font-size: ${({ theme }) => theme.fontSize.m};
    `}
`;

export default Button;
