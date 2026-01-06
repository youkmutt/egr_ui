import { Card, Button, Typography, Select, Row, Col, Space } from "antd";
import { useNavigate } from "react-router-dom";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

export default function HomePage() {
  const navigate = useNavigate();
  const options = [
    { label: "บริษัท รถไฟฟ้า ร.ฟ.ท จำกัด ", value: "1" },
    { label: "บริษัท โรงแรมท่าอากาศยานสุวรรณภูมิ จำกัด ", value: "2" },
    { label: "บริษัท บริการภาคพื้น ท่าอากาศยานไทย จำกัด ", value: "3" },
    { label: "บริษัท รักษาความปลอดภัย ท่าอากาศยานไทย จำกัด ", value: "4" },
    { label: "บริษัท ไทย แอร์พอร์ตส์กราวด์ เซอร์วิสเซส จำกัด ", value: "5" },
    {
      label: "บริษัท จัดการและพัฒนาทรัพยากรน้ำภาคตะวันออก จำกัด (มหาชน) ",
      value: "6",
    },
    { label: "บริษัท พีอีเอ เอ็นคอม อินเตอร์เนชั่นแนล จำกัด ", value: "7" },
    { label: "บริษัท จังหวัดเลย จำกัด ", value: "8" },
    { label: "บริษัท จังหวัดอุบลราชธานี จำกัด ", value: "9" },
    { label: "บริษัท ไทยแลนด์ พริวิเลจ คาร์ด จำกัด ", value: "10" },
    { label: " บริษัท ไทยจัดการลองสเตย์ จำกัด ", value: "11" },
    { label: "บริษัท เยเนอรัล ฮอสปิตัส โปรดัคส์ จำกัด (มหาชน) ", value: "12" },
    { label: "บริษัท ผลิตภัณฑ์สมุนไพรไทย จำกัด ", value: "13" },
    {
      label: "บริษัท องค์การเภสัชกรรม - เมอร์ริเออร์ชีววัตถุ จำกัด ",
      value: "14",
    },
    { label: "บริษัท จัดการทรัพย์สินและชุมชน จำกัด ", value: "15" },
    { label: "บริษัท ดีเอดี เอสพีวี จำกัด ", value: "16" },
    { label: "บริษัท โรงแรมแกรนด์ไฮแอทเอราวัณ จำกัด (มหาชน) ", value: "17" },
    { label: "บริษัท นิติบุคคลเฉพาะกิจ บตท. (๘) จำกัด ", value: "18" },
    { label: "บริษัท นิติบุคคลเฉพาะกิจ บตท. (๙) จำกัด ", value: "19" },
    { label: "บริษัท อะมานะฮ์ ลิสซิ่ง จำกัด (มหาชน) ", value: "20" },
    { label: "บริษัท เจม เอ็นไวรันเมนทัล แมเนจเม้นท์ จำกัด ", value: "21" },
    { label: "บริษัท เอ ซี ที โมบาย จำกัด ", value: "22" },
    { label: "บริษัท โมไบล์ คอมมิวนิเคชั่น เซอร์วิสเสส จำกัด ", value: "23" },
    { label: "บริษัท เลนโซ่ ดาต้าคอม จำกัด ", value: "24" },
    {
      label: "บริษัท แอดวานซ์ ดาต้าเน็ทเวอร์ค คอมมิวนิเคชั่นส์ จำกัด  ",
      value: "25",
    },
    { label: "บริษัท เทลการ์ด จำกัด ", value: "26" },
    { label: "บริษัท โครงข่ายบรอดแบนด์แห่งชาติ จำกัด ", value: "27" },
    { label: "บริษัท เอส ที ซี เน็ทเวิร์ค คอร์ปอเรชั่น จำกัด ", value: "28" },
    { label: "บริษัท สมาร์ท ไฮเวย์ จำกัด ", value: "29" },
    { label: "บริษัท เอ็นที ไอบัซซ์ จำกัด ", value: "30" },
    { label: "บริษัท ฮัทชิสัน ซีเอที ไวร์เลส มัลติมีเดีย จำกัด ", value: "31" },
    { label: "บริษัท แคท เทเลคอม โฮลดิ้ง จำกัด ", value: "32" },
    { label: "บริษัท ไปรษณีย์ไทยดิสทริบิวชั่น จำกัด ", value: "33" },
    { label: "บริษัท พาโนราม่า เวิลด์ไวด์ จำกัด ", value: "34" },
    { label: "บริษัท ซี้ดเอ็มคอท จำกัด ", value: "35" },
    { label: "บริษัท ตราดทำไม้ จำกัด ", value: "36" },
    { label: "บริษัท ผลิตไฟฟ้า จำกัด (มหาชน) ", value: "37" },
    { label: "บริษัท ราช กรุ๊ป จำกัด (มหาชน) ", value: "38" },
    { label: "บริษัท กฟผ. อินเตอร์เนชั่นแนล จำกัด ", value: "39" },
    { label: "บริษัท อีแกท ไดมอนด์ เซอร์วิส จำกัด ", value: "40" },
    { label: "บริษัท ผลิตไฟฟ้าและน้ำเย็น จำกัด ", value: "41" },
    { label: "บริษัท ปตท. สำรวจและผลิตปิโตรเลียม จำกัด (มหาชน) ", value: "42" },
    { label: "บริษัท พีทีที แอลเอ็นจี จำกัด ", value: "43" },
    { label: "บริษัท ปตท. จำหน่ายก๊าซธรรมชาติ จำกัด ", value: "44" },
    { label: "บริษัท ปตท. น้ำมันและการค้าปลีก จำกัด (มหาชน) ", value: "45" },
    { label: "บริษัท พีทีที แทงค์ เทอร์มินัล จำกัด ", value: "46" },
    { label: "PTT International Trading Pte. Ltd. ", value: "47" },
    { label: "PTT Regional Treasury Center Pte. Ltd. ", value: "48" },
    { label: "บริษัท พีทีที เอ็นเนอร์ยี่ รีซอร์สเซส จำกัด ", value: "49" },
    { label: "บริษัท ปตท. โกลบอล แมนเนจเม้นท์ จำกัด ", value: "50" },
    { label: "PTT International Trading London Ltd. ", value: "51" },
    { label: "PTT International Trading USA Inc. ", value: "52" },
    { label: "บริษัท ปตท. ศูนย์บริหารเงิน จำกัด ", value: "53" },
    { label: "PTT Green Energy Pte. Ltd.  ", value: "54" },
    { label: "บริษัท เอนเนอร์ยี่ คอมเพล็กซ์ จำกัด ", value: "55" },
    { label: "บริษัท ทรานส์ ไทย-มาเลเซีย (ประเทศไทย) จำกัด ", value: "56" },
    { label: "บริษัท ทรานส์ ไทย-มาเลเซีย (มาเลเซีย) จำกัด ", value: "57" },
    { label: "บริษัท PTT Global LNG Company Limited  ", value: "58" },
    { label: "บริษัท มาบตาพุด แอร์โปรดักส์ จำกัด ", value: "59" },
    { label: "บริษัท ไทยออยล์ จำกัด (มหาชน) ", value: "60" },
    { label: "บริษัท พีทีที โกลบอล เคมิคอล จำกัด (มหาชน) ", value: "61" },
    { label: "บริษัท ไออาร์พีซี จำกัด (มหาชน) ", value: "62" },
    { label: "บริษัท Suez Environment Services Co., Ltd. ", value: "63" },
    { label: "บริษัท โกลบอล เพาเวอร์ ซินเนอร์ยี่ จำกัด (มหาชน) ", value: "64" },
    { label: "บริษัท ไทยออยล์เพาเวอร์ จำกัด ", value: "65" },
    { label: "บริษัท พีทีที เอนเนอร์ยี่ โซลูชั่นส์ จำกัด ", value: "66" },
    { label: "บริษัท กัลฟ์ เอ็มทีพี แอลเนจี เทอร์มินอล จำกัด ", value: "67" },
    { label: "บริษัท สานพลัง วิสาหกิจเพื่อสังคม จำกัด ", value: "68" },
    { label: "บริษัท พีทีที ดิจิตอล โซลูชั่น จำกัด ", value: "69" },
    { label: "บริษัท ปตท. สผ. อินเตอร์เนชั่นแนล จำกัด ", value: "70" },
    { label: "PTTEP Offshore Investment Co., Ltd. ", value: "71" },
    { label: "บริษัท ปตท. สผ. สยาม จำกัด ", value: "72" },
    {
      label: "บริษัท ปตท. สผ. เอนเนอร์ยี่ โฮลดิ้ง (ประเทศไทย) จำกัด ",
      value: "73",
    },
    { label: "บริษัท อมตะ จัดจำหน่ายก๊าซธรรมชาติ จำกัด ", value: "74" },
    { label: "บริษัท ปตท. บริหารธุรกิจค้าปลีก จำกัด ", value: "75" },
    { label: "บริษัท ปตท. บริการธุรกิจค้าปลีก จำกัด  ", value: "76" },
    { label: "PTT Philippines Trading Corporation ", value: "77" },
    { label: "PTT Philippines Corporation ", value: "78" },
    { label: "บริษัท ไทยลู้บเบล็นดิ้ง จำกัด  ", value: "79" },
    { label: "บริษัท ปตท. (กัมพูชา) จำกัด ", value: "80" },
    { label: "บริษัท ท่อส่งปิโตรเลียมไทย จำกัด ", value: "81" },
    { label: "บริษัท ปิโตรเอเซีย (ประเทศไทย) จำกัด ", value: "82" },
    { label: "PTTOR CHINA (Shanghai) Company Limited ", value: "83" },
    { label: "PTTOR SINGAPORE Pte. Ltd ", value: "84" },
    { label: "บริษัท พีทีทีโออาร์ โฮลดิ้งส์ จำกัด ", value: "85" },
    { label: "PTT International Trading DMCC ", value: "86" },
    { label: "PTT International Holdings Ltd. ", value: "87" },
    { label: "บริษัท โอจีพี เอนเนอร์ยี่ โซลูชั่นส์ จำกัด ", value: "88" },
    { label: "บริษัท โกลบอล แมนเนจเม้นท์ โฮลดิ้ง จำกัด ", value: "89" },
    { label: "บริษัท พีทีที เรส จำกัด ", value: "90" },
    { label: "บริษัท อินโนบิก (เอเชีย) จำกัด ", value: "91" },
  ];

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
              options={options}
              allowClear
            />
          </Col>
        </Row>

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
              options={options}
              allowClear
            />
          </Col>
        </Row>
      </Space>
    </Card>
  );
}
