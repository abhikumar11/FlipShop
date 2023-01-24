import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
const Product = ({ product }) => {
     return (
          <>
               <Card className="my-3 p-3 rounded">
                    <a href={`/products/${product._id}`}>
                         <Card.Img src={product.image} variant="top" />
                    </a>
                    <Card.Body>
                         <a href={`/products/${product._id}`}>
                              <Card.Title>
                                   <strong>{product.name}</strong>
                              </Card.Title>
                         </a>
                         <Card.Text>
                              <div className="my-3">
                              <Rating value={product.rating} text={product.numReviews}/>
                              </div>
                         </Card.Text>
                         <Card.Text>
                              <div className="my-3">
                                   {product.price}
                              </div>
                         </Card.Text>
                    </Card.Body>
               </Card>
          </>
     );
};

export default Product;
