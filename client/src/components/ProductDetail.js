import React from 'react'
import products from "../ProductData";
import {Row,Col,Button,ListGroup,Image, ListGroupItem} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Rating from "./Rating";
const ProductDetail = () => {
    const {id}=useParams();
    const product=products.find((i)=>i._id===id)
  return (
    <div>
        <Row>
            <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                   <ListGroup variant='flush'>
                        <ListGroupItem>
                           <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                           <Rating value={product.rating} text={product.numReviews}/>
                        </ListGroupItem>
                   </ListGroup>
            </Col>
        </Row>
    </div>
  )
}

export default ProductDetail;