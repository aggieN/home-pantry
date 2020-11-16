import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { addItem as addItemAction } from 'actions';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import {
  Wrapper,
  InnerWrapper,
  StyledForm,
  InputWrapper,
  Label,
  Input,
  SelectWrapper,
  Select,
  Error,
} from './styles';

const NewItemModal = ({ units, category, addItem, handleClose }) => (
  <Wrapper>
    <InnerWrapper>
      <Button close onClick={handleClose} />
      <Heading big>Add a new item</Heading>

      <Formik
        initialValues={{ name: '', amount: 0, unit: 'pc' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          } else if (values.name.length > 30) {
            errors.name = 'Too long!';
          }
          if (values.amount.toString().length > 5) {
            errors.amount = `Too much!`;
          }
          return errors;
        }}
        onSubmit={(values) => {
          addItem(category, values);
          handleClose();
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
          <StyledForm autoComplete="off">
            <InputWrapper long>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? <Error>{errors.name}</Error> : null}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="amount">Amount</Label>
              <Input
                type="number"
                name="amount"
                min="1"
                max="1000"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amount}
              />
              {errors.amount && touched.amount ? <Error>{errors.amount}</Error> : null}
            </InputWrapper>

            <SelectWrapper>
              <Label htmlFor="unit">Unit</Label>
              <Select name="unit" value={values.unit} onChange={handleChange} onBlur={handleBlur}>
                {units.map((unitItem) => (
                  <option key={unitItem} value={unitItem}>
                    {unitItem}
                  </option>
                ))}
              </Select>
            </SelectWrapper>
            <Button type="submit" disabled={isSubmitting}>
              Add
            </Button>
          </StyledForm>
        )}
      </Formik>
    </InnerWrapper>
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
