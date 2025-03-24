import { LinkOutlined } from '@ant-design/icons';
import { List, Modal } from 'antd';
import { useState } from 'react';
import { HistoryRequestItem } from '../types';

const arrayTest: HistoryRequestItem[] = [
  {
    title: 'Test1',
    queryParams: {
      originalTitleAutocomplete: 'Test1',
      primaryTitleAutocomplete: 'Test1',
      type: 'movie',
      genres: 'Drama',
      startYearFrom: '10.01.2020',
    },
  },
  {
    title: 'Test2',
    queryParams: {
      originalTitleAutocomplete: 'Test2',
      primaryTitleAutocomplete: 'Test2',
      type: 'movie',
      genres: 'Drama',
      startYearFrom: '10.01.2020',
    },
  },
  {
    title: 'Test3',
    queryParams: {
      originalTitleAutocomplete: 'Test3',
      primaryTitleAutocomplete: 'Test3',
      type: 'movie',
      genres: 'Drama',
      startYearFrom: '10.01.2022',
    },
  },
];

export const HistoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRequest, setCurrentRequest] =
    useState<HistoryRequestItem | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const transformQueryParamsToString = (obj: any) => {
    if (!obj) {
      return '';
    }

    let commonStr = '';
    for (let key in obj) {
      commonStr += `${key} - ${obj[key]}; `;
    }
    return commonStr;
  };

  return (
    <>
      <div>История запросов</div>
      {arrayTest && arrayTest.length > 0 && (
        <List
          itemLayout="horizontal"
          size="large"
          style={{ marginTop: 10 }}
          dataSource={arrayTest}
          renderItem={(item, index) => (
            <List.Item
              style={{ cursor: 'pointer' }}
              onClick={() => {
                console.log('onClick');
                setCurrentRequest(item);
                showModal();
              }}
            >
              <List.Item.Meta
                avatar={<LinkOutlined />}
                style={{ alignItems: 'center' }}
                title={item.title}
                description={transformQueryParamsToString(item.queryParams)}
              />
            </List.Item>
          )}
        />
      )}
      <Modal
        title="Параметры запроса"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {currentRequest?.queryParams.originalTitleAutocomplete && (
          <p>
            Текст поиска:{' '}
            {currentRequest?.queryParams.originalTitleAutocomplete}
          </p>
        )}
        {currentRequest?.queryParams.type && (
          <p>Тип: {currentRequest?.queryParams.type}</p>
        )}
        {currentRequest?.queryParams.genres && (
          <p>Жанр: {currentRequest?.queryParams.genres}</p>
        )}
        {currentRequest?.queryParams.startYearFrom && (
          <p>Год: {currentRequest?.queryParams.startYearFrom}</p>
        )}
      </Modal>
    </>
  );
};
