import React, { useEffect, useState } from "react";
import {
     Row,
     Col,
     Button,
     ListGroup,
     Image,
     ListGroupItem,
     FormControl,
} from "react-bootstrap";
import { singleProduct } from "../actions/ProductAction";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
const ProductDetail = () => {
     const { id } = useParams();
     const [qty, setQty] = useState(1);
     const dispatch = useDispatch();
     const item = useSelector((state) => state.singleProductDetails);
     const { loading, error, product } = item;
     useEffect(() => {
          dispatch(singleProduct(id));
     }, [dispatch, id]);
 const addToCart=()=>{
     
 }
     return (
          <>
               {loading ? (
                    <Loader variant="info" message="Loading" />
               ) : error ? (
                    <h2>{error}</h2>
               ) : (
                    <div>
                         <Link to="/" className="btn btn-sm btn-light">
                              <i className="fas fa-arrow-left">&nbsp;Back</i>
                         </Link>
                         <Row>
                              <Col md={6}>
                                   <Image
                                        src={product.image}
                                        alt={product.name}
                                        fluid
                                   />
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
                                                            product.countInStock >
                                                            0
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
                                        {product.countInStock > 0 && (
                                             <ListGroupItem>
                                                  <Row>
                                                       <Col>Qty</Col>
                                                       <FormControl
                                                            as="select"
                                                            value={qty}
                                                            onChange={(e) =>
                                                                 setQty(
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                       >
                                                            {[
                                                                 ...Array(
                                                                      product.countInStock
                                                                 ).keys(),
                                                            ].map((p) => (
                                                                 <option
                                                                      key={
                                                                           p + 1
                                                                      }
                                                                      value={
                                                                           p + 1
                                                                      }
                                                                 >
                                                                      {p + 1}
                                                                 </option>
                                                            ))}
                                                       </FormControl>
                                                  </Row>
                                             </ListGroupItem>
                                        )}
                                   </ListGroupItem>
                                   <ListGroupItem>
                                        <Button
                                             className="btn btn-block btn-sm"
                                             type="button" onClick={addToCart}
                                        >
                                             Add to Cart
                                        </Button>
                                   </ListGroupItem>
                              </Col>
                         </Row>
                    </div>
               )}
          </>
     );
};

export default ProductDetail;
