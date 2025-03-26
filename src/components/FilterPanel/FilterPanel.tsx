import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setGenre } from '../../store/filterSlice';
import { Select } from 'antd';

const { Option } = Select;

function FilterPanel() {
  const dispatch = useDispatch();
  const { genre } = useSelector((state: RootState) => state.filters);

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
        <Option value="Horror">Ужасы</Option>
      </Select>
    </div>
  );
}

export default FilterPanel;
