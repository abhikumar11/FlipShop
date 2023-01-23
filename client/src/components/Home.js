import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../ProductData";
const Home = () => {
     return (
          <>
               <Row>
                    {products.map((item) => (
                         <Col>
                              <h3>{item.name}</h3>
                         </Col>
                    ))}
               </Row>
          </>
     );
};

export default Home;
