import { LinkOutlined } from '@ant-design/icons';
import { List, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { getObjectFromLocalStorageByKey } from '../api/localStorage';
import { FetchMoviesParams } from '../types/movie';
import { Typography } from 'antd';

const { Title } = Typography;

export const HistoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestlist, setRequestList] = useState<FetchMoviesParams[]>([]);
  const [currentRequest, setCurrentRequest] =
    useState<FetchMoviesParams | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const data: FetchMoviesParams[] = getObjectFromLocalStorageByKey("searchHistory")
    console.log("searchHistory", data);
    if (Array.isArray(data) && data.length > 0) {
      setRequestList(data);
    }
  }, [])

  console.log("requestlist", requestlist)

  return (
    <>
      <Title level={3}>История запросов</Title>
      {requestlist && requestlist.length > 0 && (
        <List
          itemLayout="horizontal"
          size="large"
          style={{ marginTop: 10 }}
          dataSource={requestlist}
          renderItem={(item: FetchMoviesParams) => (
            <List.Item
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setCurrentRequest(item);
                showModal();
              }}
            >
              <List.Item.Meta
                avatar={<LinkOutlined />}
                style={{ alignItems: 'center' }}
                // title={item.title}
                description={`Текст поиска: ${item.searchValue ? item.searchValue : '-'}, жанр: ${item.genre ? item.genre : '-'}, страна: ${item.country ? item.country : '-'}`}
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
        {currentRequest?.searchValue && (
          <p>
            Текст поиска:{' '}
            {currentRequest?.searchValue}
          </p>
        )}
        {currentRequest?.genre && (
          <p>Жанр: {currentRequest?.genre}</p>
        )}
        {currentRequest?.country && (
          <p>Страна: {currentRequest?.country}</p>
        )}
      </Modal>
    </>
  );
};
