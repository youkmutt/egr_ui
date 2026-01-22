import { Spin } from "antd";

export default function GlobalLoading({ loading }: { loading: boolean }) {
  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255,255,255,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Spin size="large" />
    </div>
  );
}
