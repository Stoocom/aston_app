import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/searchSlice';
import './SearchPanel.scss';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { FilterOutlined } from '@ant-design/icons';
const { Search } = Input;

export const SearchPanel = () => {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value);
  };
  const dispatch = useDispatch();

  const iconPress = () => {
    console.log('iconPress');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };
  return (
    <>
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
    </>
  );
};
