import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic} from "antd";

const { Title } = Typography;

export const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Cypto Stats
      </Title>
      <Row>
          <Col span={12}><Statistic title="Total Cryptocurrencies"/></Col>
          <Col span={12}><Statistic title="Total Exchange"/></Col>
          <Col span={12}><Statistic title="Total Market Cap"/></Col>
          <Col span={12}><Statistic title="Total 24h Volume"/></Col>
          <Col span={12}><Statistic title="Total Markets"/></Col>
      </Row>
    </>
  )
}

export default Homepage;