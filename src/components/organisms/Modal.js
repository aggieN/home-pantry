import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Form from 'components/molecules/Form';
import Button from 'components/atoms/Button';

const Wrapper = styled.div`
  height: 30rem;
  width: 60rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  box-shadow: 1px 2px 10px ${({ theme }) => theme.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Modal = () => (
  <Wrapper>
    <Heading big>Add a new item</Heading>
    <Form />
    <Button>Add</Button>
  </Wrapper>
);

export default Modal;
