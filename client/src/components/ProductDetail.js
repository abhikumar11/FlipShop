import React, { useEffect, useState } from "react";
import {
     Row,
     Col,
     Button,
     ListGroup,
     Image,
     ListGroupItem,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {

     const { id } = useParams();
     const [product, setProduct] = useState([]);

     const loadProduct = async () => {
          const  {data}  = await axios.get(`/product/${id}`);
          setProduct(data);
     };

     useEffect(() => {
          loadProduct();
     },[]);
     return (
          <div>
               <Link to="/" className="btn btn-sm btn-light">
                    <i className="fas fa-arrow-left">&nbsp;Back</i>
               </Link>
               <Row>
                    <Col md={6}>
                         <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                         <ListGroup variant="flush">
                              <ListGroupItem>
                                   <h3>{product.name}</h3>
                              </ListGroupItem>
                              <ListGroupItem>
                                   <Rating
                                        value={product.rating}
                                        text={product.numReviews}
                                   />
                              </ListGroupItem>
                              <ListGroupItem>
                                   Price: ₹{product.price}
                              </ListGroupItem>
                              <ListGroupItem>
                                   Description: {product.description}
                              </ListGroupItem>
                         </ListGroup>
                    </Col>
                    <Col md={3}>
                         <ListGroupItem>
                              <Row>
                                   <Col>Status:</Col>
                                   <Col
                                        style={{
                                             color:
                                                  product.countInStock > 0
                                                       ? "green"
                                                       : "red",
                                        }}
                                   >
                                        {product.countInStock > 0
                                             ? "In Stock"
                                             : "Out of Stock"}
                                   </Col>
                              </Row>
                         </ListGroupItem>
                         <ListGroupItem>
                              <Button
                                   className="btn btn-block btn-sm"
                                   type="button"
                              >
                                   Add to Cart
                              </Button>
                         </ListGroupItem>
                    </Col>
               </Row>
          </div>
     );
};

export default ProductDetail;
