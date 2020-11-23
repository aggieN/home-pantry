import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button';
import { WarningContainer, WarningText, ButtonContainer } from './styles';

const Warning = ({ item, category, removeFn, closeFn }) => (
  <WarningContainer>
    <WarningText>{`Are you sure you want to remove ${item} from your ${category} list?`}</WarningText>
    <ButtonContainer>
      <Button onClick={removeFn} secondary>
        Yes
      </Button>
      <Button secondary onClick={closeFn}>
        No
      </Button>
    </ButtonContainer>
  </WarningContainer>
);

Warning.propTypes = {
  item: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeFn: PropTypes.func.isRequired,
  closeFn: PropTypes.func.isRequired,
};

export default Warning;
