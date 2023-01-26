import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "./Product";
import axios from "axios";
const Home = () => {
     const [products, setProducts] = useState([]);

     const loadProduct = async () => {
          const { data } = await axios.get("/products");
          setProducts(data);
     };

     useEffect(() => {
          loadProduct();
     }, []);

     return (
          <>
               <Row>
                    {products.map((item) => (
                         <Col md={3} key={item._id}>
                              <Product product={item} />
                         </Col>
                    ))}
               </Row>
          </>
     );
};

export default Home;
