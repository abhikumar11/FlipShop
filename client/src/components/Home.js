import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "./Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ListProduct } from "../actions/ProductAction";
const Home = () => {
     const dispatch = useDispatch();
     const productList = useSelector((state) => state.productList);
     const { loading, error, products } = productList;
     useEffect(() => {
          dispatch(ListProduct());
     }, []);

     return (
          <>
               {loading ? (
                    <h2>loading...</h2>
               ) : error ? (
                    <h2>{error}</h2>
               ) : (
                    <Row>
                         {products.map((item) => (
                              <Col md={3} key={item._id}>
                                   <Product product={item} />
                              </Col>
                         ))}
                    </Row>
               )}
          </>
     );
};

export default Home;
