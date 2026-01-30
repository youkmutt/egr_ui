import { Button, Card, Form, Input, message } from "antd";
import { useLoading } from "../../context/LoadingContext";
import { Configuration, UserApi } from "../../api";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onFinish = async (values: any) => {
    console.log("login:", values);
    const config = new Configuration({
      username: values.username,
      password: values.password,
    });
    const userApiWithAuth = new UserApi(config);
    showLoading();
    try {
      const response = await userApiWithAuth.apiUserSigninPost();
      localStorage.setItem("token", "basic");
      navigate(from, { replace: true });
    } catch (e) {
      console.error(e);
      hideLoading();
      message.error("ไม่สารมารถเข้าระบบได้ กรุณาลองใหม่");
    } finally {
      hideLoading();
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fa",
      }}
    >
      <Card title="Login" style={{ width: 360 }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}
