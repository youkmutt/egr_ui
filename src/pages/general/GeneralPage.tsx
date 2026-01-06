import { Button, Card, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function GeneralPage() {
  const navigate = useNavigate();

  return (
    <Card>
      <Space orientation="vertical" size="middle" style={{ display: "flex" }}>
        <Space align="center" size="middle">
          <Title level={3} style={{ margin: 0 }}>
            General Page
          </Title>
          <Button type="primary" shape="round" onClick={() => navigate("/")}>
            ไปหน้า Home
          </Button>
        </Space>
      </Space>
    </Card>
  );
}
