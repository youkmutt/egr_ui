import { Card, Button, Select, Row, Col, Space } from "antd";
import { useNavigate } from "react-router-dom";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { useEffect, useRef, useState } from "react";
import { useLoading } from "../context/LoadingContext";
import { CompanyApi, type DropdownModel } from "../api";
import { message } from "antd";

export default function HomePage() {
  const isLoaded = useRef(false);
  const navigate = useNavigate();
  const companyApi = new CompanyApi();
  const { showLoading, hideLoading } = useLoading();
  const [companyDDL, setCompanyDDL] = useState<Array<DropdownModel>>();

  useEffect(() => {
    if (isLoaded.current) return;
    isLoaded.current = true;
    loadData();
  }, []);

  const loadData = async () => {
    showLoading();
    try {
      const response = await companyApi.apiCompanyDropdownGet();
      setCompanyDDL(response ?? []);
    } catch (e) {
      console.error(e);
      hideLoading();
      message.error("โหลดข้อมูลบริษัทไม่สำเร็จ");
    } finally {
      hideLoading();
    }
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <Card>
      <Space orientation="vertical" size="middle" style={{ display: "flex" }}>
        <Space align="center" size="middle">
          <Title level={3} style={{ margin: 0 }}>
            Home Page
          </Title>
          <Button
            type="primary"
            shape="round"
            onClick={() => navigate("/general")}
          >
            ไปหน้า General
          </Button>
        </Space>

        <Row>
          <Col span={6}>
            <Text type="secondary">
              เช็คกลุ่มบริษัทในของบริษัทในเครือตามรายชื่อบริษัทในเครือปี 2563
              ตามมติ คนร. ครั้งที่ 3/2564
            </Text>
            <Select
              showSearch={{ optionFilterProp: "label", onSearch }}
              placeholder="Select a person"
              onChange={onChange}
              style={{ width: "100%", marginTop: 4 }}
              options={companyDDL ?? []}
              allowClear
            />
          </Col>
        </Row>
      </Space>
    </Card>
  );
}
