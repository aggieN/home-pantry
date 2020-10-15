import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import ButtonIcon from 'components/atoms/ButtonIcon';
import penIcon from 'assets/icons/pen.svg';
import deleteIcon from 'assets/icons/trash.svg';

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

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 15rem repeat(3, 1fr);
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-top: 3rem;
`;

const Card = ({ category, items, removeItem }) => (
  <Wrapper>
    <Header>
      <StyledHeading>{category}</StyledHeading>
    </Header>

    <ListWrapper>
      {items.map((item) => (
        <ListItem key={item.id}>
          <p>{item.name}</p>
          <p>{`${item.amount} ${item.unit}`}</p>
          <ButtonIcon icon={penIcon} />
          <ButtonIcon icon={deleteIcon} onClick={() => removeItem(item.id)} />
        </ListItem>
      ))}
      <StyledButton>Add item</StyledButton>
    </ListWrapper>
  </Wrapper>
);

Card.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ),
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  items: [],
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItemAction(id)),
});
export default connect(null, mapDispatchToProps)(Card);
