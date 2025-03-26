import React from 'react';
import ReactDOM from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              controlHeightSM: 35, // Small-sized controls height
              controlHeightLG: 55, // Large-sized controls height
              controlHeight: 35, // Default control height
              fontSize: 18,
              // colorPrimaryActive: '#001529',
              // colorBgBase: '#001529',
              // colorPrimaryBg: '#001529',
              colorPrimary: 'rgb(21, 99, 172)',
            },
          }}
        >
          <App />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
