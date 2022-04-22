import React from "react";
import { Routes, Link, Route} from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar, Homepage, Exchanges, Cryptocurrencies, News, CryptoDetails } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
            <div className="routes">
              <Routes>
                  <Route path="/">
                      <Homepage />
                  </Route>
                  <Route exact path="/exchanges">
                      <Exchanges />
                  </Route>
                  <Route exact path="/cryptocurrencies">
                      <Cryptocurrencies />
                  </Route>
                  <Route exact path="/crypto/:coinId">
                      <CryptoDetails />
                  </Route>
                  <Route exact path="/news">
                      <News />
                  </Route>
              </Routes>
            </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
              Cryptoverse<br />
              All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/"/>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App;