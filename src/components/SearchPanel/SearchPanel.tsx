import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchValue } from '../../store/searchSlice';
import './SearchPanel.scss';
import { Input, Button } from 'antd';
import { SearchProps } from 'antd/es/input';
import { FilterOutlined } from '@ant-design/icons';
import debounce from 'lodash/debounce';
const { Search } = Input;

export const SearchPanel = () => {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value);
  };
  const dispatch = useDispatch();

  const debouncedSearchChange = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 400),
    [dispatch]
  );

  const iconPress = () => {
    console.log('iconPress');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearchChange(e.target.value);
  };
  return (
    <div className="search">
      <Search
        placeholder="Например: Нападение пришельцев"
        enterButton="Поиск"
        size="large"
        className="panel"
        allowClear
        suffix={
          <FilterOutlined
            onClick={iconPress}
            style={{ fontSize: 24, color: '#bfc6d3' }}
          />
        }
        onChange={(e) => handleSearchChange(e)}
        onSearch={onSearch}
      />
      <Link to="/favorites">
        <Button className="button" type="primary">
          Избранное
        </Button>
      </Link>
    </div>
  );
};
