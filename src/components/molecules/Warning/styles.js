import styled from 'styled-components';

export const WarningContainer = styled.div`
  position: fixed;
  width: 40rem;
  height: 45rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 45px;
  box-shadow: 1px 2px 10px ${({ theme }) => theme.dark};
  background-color: white;
  border-radius: 1.5rem;
`;

export const WarningText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
