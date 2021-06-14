import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import Input from '../Input';

const Filter = () => {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();
  const onChangeFilter = event => dispatch(changeFilter(event.target.value));

  return (
    <Input
      type="text"
      value={value}
      name="find contacts by name"
      onChange={onChangeFilter}
    />
  );
};

export default Filter;
