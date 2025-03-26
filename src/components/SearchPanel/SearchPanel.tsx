import React from 'react';
import './SearchPanel.scss';
import { Input, Space } from 'antd';
import { SearchProps } from 'antd/es/input';
import { FilterOutlined } from '@ant-design/icons';
const { Search } = Input;

export const SearchPanel = () => {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  const iconPress = () => {
    console.log('iconPress');
  };

  const handleSearchChange = () => {
    console.log('handleSearchChange');
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
        onChange={handleSearchChange}
        onSearch={onSearch}
      />
    </>
  );
};
