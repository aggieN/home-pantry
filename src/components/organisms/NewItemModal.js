import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { addItem as addItemAction } from 'actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
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

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input``;
const Label = styled.label``;

const NewItemModal = ({ units, category, addItem, handleClose }) => (
  <Wrapper>
    <Heading big>Add a new item</Heading>
    <Formik
      initialValues={{ name: '', amount: 0, unit: 'pc' }}
      onSubmit={(values) => {
        addItem(category, values);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur, isSubmitting }) => (
        <StyledForm>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="amount">Amount</Label>
            <Input
              type="number"
              name="amount"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.amount}
            />
          </InputWrapper>

          <SelectWrapper>
            <label htmlFor="unit">Unit</label>
            <select name="unit" value={values.unit} onChange={handleChange} onBlur={handleBlur}>
              {units.map((unitItem) => (
                <option key={unitItem} value={unitItem}>
                  {unitItem}
                </option>
              ))}
            </select>
          </SelectWrapper>
          <Button type="submit" disabled={isSubmitting}>
            Add
          </Button>
        </StyledForm>
      )}
    </Formik>
  </Wrapper>
);

NewItemModal.propTypes = {
  units: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const allUnitsArray = state.map((element) => element.items.map((item) => item.unit));
  const allUnits = allUnitsArray.flat();
  const unitsSet = new Set(allUnits);
  const units = [...unitsSet];

  return { units };
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (category, itemContent) => dispatch(addItemAction(category, itemContent)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewItemModal);
