import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading';
import ProductList from 'components/molecules/ProductsList';
import Button from 'components/atoms/Button';
import NewItemModal from 'components/organisms/NewItemModal';

const Wrapper = styled.div`
  box-shadow: -7px 5px 15px rgba(0, 0, 0, 0.5);
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.blue};
  width: 100%;
  height: 5rem;
`;

const StyledHeading = styled(Heading)`
  display: block;
  padding: 1rem 2rem;
`;

const ListWrapper = styled.div`
  padding: 2rem;
`;

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
