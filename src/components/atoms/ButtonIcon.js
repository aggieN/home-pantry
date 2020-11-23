import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 5rem;
  height: 5rem;
  background-color: white;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;
  outline: none;
  transition: transform 0.5s 0.1s ease;
  cursor: pointer;

  &:hover {
    transform: translateX(0.5rem);
  }
`;

export default ButtonIcon;
