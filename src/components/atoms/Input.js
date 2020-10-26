import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputField = styled.input``;
const Label = styled.label``;

const Input = ({ type, name, label }) => (
  <InputWrapper>
    <Label htmlFor={name}>{label}</Label>
    <InputField type={type} name={name} id={name} />
  </InputWrapper>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
