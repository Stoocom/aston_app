import { Link } from "react-router-dom";
import { Button, Flex } from "antd";
import "./HeaderMenu.scss";

export const HeaderMenu = () => {
  return (
    <Flex justify="space-between">
      <Link to="/" className="custom_big">
        Лого
      </Link>
      <Flex gap="large">
        <Link to="/signin" className="custom_big">
          Вход
        </Link>
        <Link to="/signup" className="custom_big">
          Регистрация
        </Link>
      </Flex>
    </Flex>
  );
};
