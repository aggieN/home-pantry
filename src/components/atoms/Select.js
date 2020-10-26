import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SelectField = styled.select``;
const Label = styled.label``;
const Option = styled.option``;

const Select = ({ name, label, units }) => {
  return (
    <SelectWrapper>
      <Label htmlFor={name}>{label}</Label>
      <SelectField name={name}>
        {units.map((unit) => (
          <Option key={unit} value={unit}>
            {unit}
          </Option>
        ))}
      </SelectField>
    </SelectWrapper>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  units: PropTypes.arrayOf(PropTypes.string).isRequired,
};
const mapStateToProps = (state) => {
  const allUnitsArray = state.map((element) => element.items.map((item) => item.unit));
  const allUnits = allUnitsArray.flat();
  const unitsSet = new Set(allUnits);
  const units = [...unitsSet];

  return { units };
};
export default connect(mapStateToProps)(Select);
