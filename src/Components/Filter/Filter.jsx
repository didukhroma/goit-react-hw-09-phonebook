import PropTypes from 'prop-types';
import Input from '../Input';

const Filter = ({ value = '', onChangeFilter }) => {
  return (
    <Input
      type="text"
      value={value}
      name="find contacts by name"
      onChange={onChangeFilter}
    />
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;
