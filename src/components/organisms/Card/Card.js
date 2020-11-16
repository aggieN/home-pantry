import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductList from 'components/molecules/ProductsList/ProductsList';
import Button from 'components/atoms/Button';
import NewItemModal from 'components/organisms/NewItemModal/NewItemModal';
import { Wrapper, Header, StyledHeading, ListWrapper } from './styles';

class Card extends Component {
  state = {
    isModal: false,
  };

  toggleModal = () => this.setState((prevState) => ({ isModal: !prevState.isModal }));

  render() {
    const { category, items } = this.props;
    const { isModal } = this.state;
    return (
      <Wrapper>
        <Header>
          <StyledHeading>{category}</StyledHeading>
        </Header>

        <ListWrapper>
          <ProductList items={items} category={category} />

          <Button onClick={this.toggleModal}>Add item</Button>
          {isModal && <NewItemModal category={category} handleClose={this.toggleModal} />}
        </ListWrapper>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      amount: PropTypes.number,
      unit: PropTypes.string,
    }),
  ),
};

Card.defaultProps = {
  items: [],
};

export default Card;
