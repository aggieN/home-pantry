import styled from 'styled-components';
import { Form } from 'formik';

export const StyledEditForm = styled(Form)`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 2fr repeat(3, 1fr);
  grid-gap: 0.5rem;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InlineInput = styled.input`
  outline: none;
  border: 2px dashed ${({ theme }) => theme.greyLight};
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &:first-child {
    text-align: left;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 1.3rem;
  position: absolute;
  top: -1.8rem;
  left: 0;
`;

export const InlineSelect = styled.select`
  outline: none;
  border: 2px dashed ${({ theme }) => theme.greyLight};
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr repeat(2, 1fr);
  align-items: center;
  color: black;
`;
