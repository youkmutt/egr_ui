import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

import { useState } from "react";
import Title from "antd/es/typography/Title";

export default function PageLayout() {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
      >
        <div
          style={{
            height: 64,
            margin: 16,
            background: "rgba(255,255,255,.2)",
            borderRadius: 8,
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={(e) => navigate(e.key)}
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "/general",
              icon: <AppstoreOutlined />,
              label: "General",
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 16px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Title level={4} style={{ margin: 0 }}>
            Enterprise Group Report (EGR)
          </Title>
        </Header>

        <Content style={{ margin: 16 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
