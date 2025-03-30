import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setGenre, setCountry } from '../../store/filterSlice';
import { Select } from 'antd';

const { Option } = Select;

function FilterPanel() {
  const dispatch = useDispatch();
  const { genre, country } = useSelector((state: RootState) => state.filters);

  return (
    <div className="filters">
      <Select
        value={genre}
        onChange={(value) => dispatch(setGenre(value))}
        placeholder="Выберите жанр"
        style={{ width: 200 }}
      >
        <Option value="">Все жанры</Option>
        <Option value="Action">Боевик</Option>
        <Option value="Comedy">Комедия</Option>
        <Option value="Drama">Драма</Option>
        <Option value="Crime">Криминал</Option>
      </Select>
      <Select
        value={country}
        onChange={(value) => dispatch(setCountry(value))}
        placeholder="Выберите жанр"
        style={{ width: 200 }}
      >
        <Option value="">Все страны</Option>
        <Option value="USA">США</Option>
        <Option value="France">Франция</Option>
        <Option value="Italy">Италия</Option>
        <Option value="New Zealand">Новая Зеландия</Option>
      </Select>
    </div>
  );
}

export default FilterPanel;
