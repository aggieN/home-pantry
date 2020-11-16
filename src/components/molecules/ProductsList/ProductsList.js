import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import Button from 'components/atoms/Button';
import ButtonIcon from 'components/atoms/ButtonIcon';
import penIcon from 'assets/icons/pen.svg';
import deleteIcon from 'assets/icons/trash.svg';
import { ListItem, Warning, WarningText, ButtonContainer } from './styles';

class ProductsList extends Component {
  state = {
    warning: false,
    clickedItem: null,
  };

  openWarning = (clickedId) => this.setState({ warning: true, clickedItem: clickedId });

  closeWarning = () => this.setState({ warning: false });

  render() {
    const { items, removeItem, category } = this.props;
    const { warning, clickedItem } = this.state;
    return (
      <div>
        {items.map((item) => (
          <ListItem key={item.id}>
            <p>{item.name}</p>
            <p>{`${item.amount} ${item.unit}`}</p>
            <ButtonIcon icon={penIcon} />
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
});

export default connect(null, mapDispatchToProps)(ProductsList);
