import styled, { css } from 'styled-components';
import { Form } from 'formik';

export const Wrapper = styled.div`
  height: 40rem;
  width: 50rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1.5rem;
`;
export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  position: relative;
  background-color: white;
  box-shadow: 1px 2px 10px ${({ theme }) => theme.dark};
  text-align: center;
  border-radius: 1.5rem;
`;

export const StyledForm = styled(Form)`
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`;

export const SelectWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;

  ${({ long }) =>
    long &&
    css`
      width: 45%;
    `}
`;

export const Input = styled.input`
  height: 3rem;
  box-shadow: 1px 1px 5px ${({ theme }) => theme.dark};
  border: none;
  outline: none;
  border-radius: 0.5rem;
`;

export const Select = styled.select`
  height: 3rem;
  font-size: 1.5rem;
  box-shadow: 1px 1px 5px ${({ theme }) => theme.dark};
  border: none;
  outline: none;
  border-radius: 0.5rem;
`;

export const Label = styled.label`
  text-transform: lowercase;
  margin-bottom: 0.6rem;
  align-self: flex-start;
`;

export const Error = styled.div`
  color: red;
  font-size: 1.5rem;
  margin-top: 0.7rem;
  align-self: flex-start;
`;
