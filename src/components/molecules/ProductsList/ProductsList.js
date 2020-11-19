import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { removeItem as removeItemAction, editItem as editItemAction } from 'actions';
import Button from 'components/atoms/Button';
import ButtonIcon from 'components/atoms/ButtonIcon';
import penIcon from 'assets/icons/pen.svg';
import deleteIcon from 'assets/icons/trash.svg';
import { ListItem, Warning, WarningText, ButtonContainer } from './styles';
import { editItem } from '../../../actions';

class ProductsList extends Component {
  state = {
    warning: false,
    clickedItem: null,
    isInputActive: false,
  };

  inputRef = React.createRef();

  openWarning = (clickedId) =>
    this.setState({ warning: true, clickedItem: clickedId, isInputActive: false });

  closeWarning = () => this.setState({ warning: false });

  activateInput = (clickedId) => this.setState({ isInputActive: true, clickedItem: clickedId });

  render() {
    const { items, removeItem, category } = this.props;
    const { warning, clickedItem, isInputActive } = this.state;
    return (
      <div>
        {items.map((item) => (
          <ListItem key={item.id}>
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
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
                  <Form autoComplete="off">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name ? <div>{errors.name}</div> : null}

                    <input
                      type="number"
                      name="amount"
                      min="1"
                      max="1000"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.amount}
                    />
                    {errors.amount && touched.amount ? <div>{errors.amount}</div> : null}

                    <select name="unit" value={values.unit} onChange={handleChange}>
                      <option value="pc">pc</option>
                      <option value="kg">kg</option>
                      <option value="g">g</option>
                      <option value="l">l</option>
                      <option value="pack">pack</option>
                    </select>
                    <button type="submit" disabled={isSubmitting}>
                      submit
                    </button>
                  </Form>
                )}
              </Formik>
            ) : (
              <>
                <p>{item.name}</p>
                <p>{`${item.amount} ${item.unit}`}</p>{' '}
              </>
            )}
            <ButtonIcon icon={penIcon} onClick={() => this.activateInput(item.id)} />
            <ButtonIcon icon={deleteIcon} onClick={() => this.openWarning(item.id)} />

            {warning && clickedItem === item.id ? (
              <Warning>
                <WarningText>{`Are you sure you want to remove ${item.name} from your ${category} list?`}</WarningText>
                <ButtonContainer>
                  <Button onClick={() => removeItem(item.id)} secondary>
                    Yes
                  </Button>
                  <Button secondary onClick={this.closeWarning}>
                    No
                  </Button>
                </ButtonContainer>
              </Warning>
            ) : null}
          </ListItem>
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
};

ProductsList.defaultProps = {
  items: [],
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
  editItem: (id, itemContent) => dispatch(editItemAction(id, itemContent)),
});

export default connect(null, mapDispatchToProps)(ProductsList);
