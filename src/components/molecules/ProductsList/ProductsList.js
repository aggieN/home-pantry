import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { removeItem as removeItemAction, editItem as editItemAction } from 'actions';
import Warning from 'components/molecules/Warning/Warning';
import ButtonIcon from 'components/atoms/ButtonIcon';
import penIcon from 'assets/icons/pen.svg';
import cancelIcon from 'assets/icons/cancel.svg';
import checkIcon from 'assets/icons/check.svg';
import deleteIcon from 'assets/icons/trash.svg';
import { StyledEditForm, InputWrapper, InlineInput, Error, InlineSelect, ListItem } from './styles';

class ProductsList extends Component {
  state = {
    warning: false,
    clickedItem: null,
    isInputActive: false,
  };

  openWarning = (clickedId) =>
    this.setState({ warning: true, clickedItem: clickedId, isInputActive: false });

  closeWarning = () => this.setState({ warning: false });

  activateInlineEdit = (clickedId) =>
    this.setState({ isInputActive: true, clickedItem: clickedId, warning: false });

  cancelEdit = () => this.setState({ isInputActive: false });

  render() {
    const { items, removeItem, editItem, category } = this.props;
    const { warning, clickedItem, isInputActive } = this.state;
    return (
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {isInputActive && clickedItem === item.id ? (
              <Formik
                initialValues={{
                  name: item.name,
                  amount: item.amount,
                  unit: item.unit,
                }}
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
                  editItem(item.id, values);
                  this.setState({ isInputActive: false });
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
                  <StyledEditForm autoComplete="off">
                    <InputWrapper>
                      <InlineInput
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {errors.name && touched.name ? <Error>{errors.name}</Error> : null}
                    </InputWrapper>
                    <InputWrapper>
                      <InlineInput
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

                    <InlineSelect name="unit" value={values.unit} onChange={handleChange}>
                      <option value="pc">pc</option>
                      <option value="kg">kg</option>
                      <option value="g">g</option>
                      <option value="l">l</option>
                      <option value="pack">pack</option>
                    </InlineSelect>

                    <ButtonIcon icon={checkIcon} type="submit" disabled={isSubmitting} />
                    <ButtonIcon icon={cancelIcon} onClick={this.cancelEdit} />
                  </StyledEditForm>
                )}
              </Formik>
            ) : (
              <ListItem>
                <p>{item.name}</p>
                <p>{`${item.amount} ${item.unit}`}</p>
                <ButtonIcon icon={penIcon} onClick={() => this.activateInlineEdit(item.id)} />
                <ButtonIcon icon={deleteIcon} onClick={() => this.openWarning(item.id)} />
              </ListItem>
            )}

            {warning && clickedItem === item.id ? (
              <Warning
                item={item.name}
                category={category}
                removeFn={() => removeItem(item.id)}
                closeFn={this.closeWarning}
              />
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      amount: PropTypes.number,
      unit: PropTypes.string,
    }),
  ),
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

ProductsList.defaultProps = {
  items: [],
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  editItem: (id, itemContent) => dispatch(editItemAction(id, itemContent)),
});

export default connect(null, mapDispatchToProps)(ProductsList);
