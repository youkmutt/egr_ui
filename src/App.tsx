import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import HomePage from "./pages/HomePage";
import GeneralPage from "./pages/general/GeneralPage";
import PageLayout from "./layouts/PageLayout";
import GlobalLoading from "./context/GlobalLoading";
import { LoadingProvider, useLoading } from "./context/LoadingContext";
import LoginPage from "./pages/login/LoginPage";
import RequireAuth from "./routes/RequireAuth";
import RedirectIfAuth from "./routes/RedirectIfAuth";

function App() {
  function LoadingGate() {
    const { loading } = useLoading();
    return <GlobalLoading loading={loading} />;
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          // ===== Core =====
          colorPrimary: "#9d9e40ff",
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#ff4d4f",
          colorInfo: "#9d9e40ff",

          // ===== Text =====
          colorText: "#111827",
          colorTextSecondary: "#4b5563",
          colorTextTertiary: "#9ca3af",
          colorTextQuaternary: "#d1d5db",
          colorTextLightSolid: "#ffffff",

          // ===== Background =====
          colorBgBase: "#f5f7fa",
          colorBgContainer: "#ffffff",
          colorBgLayout: "#f5f7fa",
          colorBgElevated: "#ffffff",
          colorBgSpotlight: "#111827",

          // ===== Border =====
          colorBorder: "#e5e7eb",
          colorBorderSecondary: "#f3f4f6",

          // ===== Radius =====
          borderRadius: 8,
          borderRadiusLG: 12,
          borderRadiusSM: 6,

          // ===== Font =====
          fontSize: 14,
          fontSizeLG: 16,
          fontSizeSM: 12,

          // ===== Control =====
          controlHeight: 36,
          controlHeightLG: 44,
          controlHeightSM: 28,

          // ===== Shadow =====
          boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
          boxShadowSecondary: "0 4px 12px rgba(0,0,0,0.08)",
        },

        components: {
          // ===== Layout =====
          Layout: {
            siderBg: "#0e1c2f",
            headerBg: "#ffffff",
            bodyBg: "#f5f7fa",
            headerHeight: 56,
            triggerBg: "#0e1c2f",
            triggerColor: "#ffffff",
          },

          // ===== Menu (Dark Sider) =====
          Menu: {
            darkItemBg: "#0e1c2f",
            darkItemColor: "#cbd5e1",
            darkItemHoverBg: "#1e293b",
            darkItemHoverColor: "#ffffff",
            darkItemSelectedBg: "#9d9e40ff",
            darkItemSelectedColor: "#ffffff",
          },

          // ===== Button =====
          Button: {
            primaryColor: "#ffffff",
            defaultBorderColor: "#d1d5db",
            defaultColor: "#111827",
            defaultHoverBg: "#f3f4f6",
            defaultHoverBorderColor: "#e40404ff",
          },

          // ===== Input / Select / DatePicker =====
          Input: {
            colorBgContainer: "#ffffff",
            colorBorder: "#d1d5db",
            colorTextPlaceholder: "#9ca3af",
            activeBorderColor: "#9d9e40ff",
            hoverBorderColor: "#9d9e40ff",
          },

          Select: {
            colorBorder: "#d1d5db",
            optionSelectedBg: "#f0f1d4",
            optionSelectedColor: "#111827",
          },

          DatePicker: {
            colorBorder: "#d1d5db",
            activeBorderColor: "#9d9e40ff",
            hoverBorderColor: "#9d9e40ff",
          },

          // ===== Table =====
          Table: {
            headerBg: "#f3f4f6",
            headerColor: "#111827",
            rowHoverBg: "#f0f1d4",
            borderColor: "#e5e7eb",
          },

          // ===== Card =====
          Card: {
            colorBgContainer: "#ffffff",
            headerBg: "#ffffff",
          },

          // ===== Modal =====
          Modal: {
            contentBg: "#ffffff",
            headerBg: "#ffffff",
            titleColor: "#111827",
          },

          // ===== Tabs =====
          Tabs: {
            itemColor: "#6b7280",
            itemHoverColor: "#9d9e40ff",
            itemSelectedColor: "#9d9e40ff",
            inkBarColor: "#9d9e40ff",
          },

          // ===== Pagination =====
          Pagination: {
            itemActiveBg: "#9d9e40ff",
            itemActiveColor: "#ffffff",
          },

          // ===== Tooltip =====
          Tooltip: {
            colorBgSpotlight: "#111827",
            colorTextLightSolid: "#ffffff",
          },
        },
      }}
    >
      <LoadingProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                <RedirectIfAuth>
                  <LoginPage />
                </RedirectIfAuth>
              }
            />

            <Route
              element={
                <RequireAuth>
                  <PageLayout />
                </RequireAuth>
              }
            >
              <Route path="/" element={<HomePage />} />
              <Route path="/general" element={<GeneralPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <LoadingGate />
      </LoadingProvider>
    </ConfigProvider>
  );
}

export default App;
