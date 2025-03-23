import { Outlet } from "react-router-dom";
import { HeaderMenu } from "../components/Header/HeaderMenu";
import { Flex, Layout } from "antd";
import "../App.scss";

const { Header, Content } = Layout;

export const ContentLayout = () => {
  return (
    <Flex justify="center">
      <Layout className="container">
        <Header className="header">
          <HeaderMenu />
        </Header>
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
    </Flex>
  );
};
