import styled from 'styled-components';

const Button = styled.button`
  padding: 0.3rem 2rem;
  background-color: ${({ theme }) => theme.blue};
  border: none;
  border-radius: 1rem;
  height: 3.5rem;
  transition: all 0.5s 0.1s ease;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.1);
    box-shadow: -1px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;

export default Button;
