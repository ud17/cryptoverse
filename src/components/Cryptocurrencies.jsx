import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  // simplified from the props
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // executed whenever cryptoList or searchTerm changes
  // useEffect is a combination of...
  // componentDidMount() - happening at the start
  // componentDidUpdate() - when the component updates
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filteredData);
  } 
  , [ cryptosList, searchTerm])
  if(isFetching) return "Loading...";

  return (
    // react fragment
    <>
      
      {!simplified && (
          <div className="search-crypto">
            <Input placeholder="Search Cryptocurrency..." onChange={(e) => setSearchTerm(e.target.value)}/>
          </div>
        )
      }   
      
      {/* gutters are simply spaces between the items
      top, bottom, left, right */}
      <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((currency) => (
            // xs: How much width the column will take on extra small devices
            // max: 24
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                {/* entire card is going to be link */}
                <Link to={`/crypto/${currency.id}`}>
                  <Card title={`${currency.rank}. ${currency.name}`}
                    extra={<img className="crypto-image" src={currency.iconUrl}/>}
                    hoverable
                  >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}</p>
                  </Card>
                </Link>
            </Col>
          ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies