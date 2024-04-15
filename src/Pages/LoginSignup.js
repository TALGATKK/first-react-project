import { useContext } from "react";
import { Form, Input, Button, ConfigProvider } from "antd";
import { AuthContext } from "../AuthContext";
import "./CSS/LoginSignup.css";

export function LoginSignup() {
  const { login } = useContext(AuthContext);
  const onFinish = (values) => {
    console.log("Success:", values);
    login(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="loginsignup">
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#fe2722",
              colorPrimaryActive: "#BF240C",
              colorPrimaryHover: "#BF240C",
              colorPrimaryBorder: "#ffffff",
              colorBorder: "#ffffff",
            },
          },
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Имя пользователя"
            name="username"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите имя пользователя!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите пароль!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Продолжить
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
}
