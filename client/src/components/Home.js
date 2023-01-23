import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../ProductData";
import Product from "./Product";
const Home = () => {
     return (
          <>
               <Row>
                    {products.map((item) => (
                         <Col md={3} key={item._id}>
                              <Product product={item}/>
                         </Col>
                    ))}
               </Row>
          </>
     );
};

export default Home;
