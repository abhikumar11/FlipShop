import React, { useEffect } from "react";
import {
     Row,
     Col,
     Button,
     ListGroup,
     Image,
     ListGroupItem,
} from "react-bootstrap";
import{singleProduct} from "../actions/ProductAction";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {

     const { id } = useParams();
     const dispatch=useDispatch();
     const item=useSelector((state)=>state.singleProductDetails);
     const {loading,error,product} = item;
     useEffect(() => {
          dispatch(singleProduct(id))
     }, [dispatch,id]) 
     
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
                                             : "Not Available"}
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
