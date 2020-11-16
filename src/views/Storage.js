import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from 'components/organisms/Card';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
`;
const Storage = ({ data }) => {
  return (
    <GridContainer>
      {data.map((dataCard) => (
        <div key={dataCard.category}>
          <Card category={dataCard.category} items={dataCard.items} />
        </div>
      ))}
    </GridContainer>
  );
};

const mapStateToProps = (state) => {
  const data = state.map((element) => element);
  return { data };
};

Storage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
};

Storage.defaultProps = {
  data: [],
};
export default connect(mapStateToProps)(Storage);
