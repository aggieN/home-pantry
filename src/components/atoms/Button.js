import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0.3rem 2rem;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  border-radius: 1rem;
  height: 4rem;
  width: 12rem;
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

  ${({ close }) =>
    close &&
    css`
      position: absolute;
      right: 3rem;
      top: 0;
      width: 4rem;
      height: 4rem;
        &::before, 
        &::after {
          content: '';
          width: 2.2rem; 
          height: 0.3rem;
          position: absolute;
          background-color: ${({ theme }) => theme.dark};
          display: block;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 auto;
          transform-origin: 50%;
        }
        
        &::before {
          transform: rotate(45deg);
        }
        
        &::after {
          transform: rotate(-45deg);
          `}
`;

export default Button;
