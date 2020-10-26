import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Select from '../atoms/Select';

const Wrapper = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const Form = () => {
  return (
    <Wrapper autoComplete="off">
      <Input type="text" name="name" label="Product name" />
      <Input type="number" name="amount" label="Amount" />
      <Select name="Unit" label="Unit" />
    </Wrapper>
  );
};

export default Form;
