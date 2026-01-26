import { Layout, Menu, Button, type MenuProps, Dropdown } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Title from "antd/es/typography/Title";

export default function PageLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    // ล้างสถานะ login
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // กลับหน้า login
    navigate("/login", { replace: true });
  };

  const userMenuItems: MenuProps["items"] = [
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: handleLogout,
    },
  ];

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
            justifyContent: "space-between",
          }}
        >
          <Title level={4} style={{ margin: 0 }}>
            Enterprise Group Report (EGR)
          </Title>

          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <Button
              type="text"
              icon={<UserOutlined />}
              style={{
                fontSize: 18,
                boxShadow: "none",
                outline: "none",
                border: "none",
              }}
            />
          </Dropdown>
        </Header>

        <Content style={{ margin: 16 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
