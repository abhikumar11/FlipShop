import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions/CartAction";
import {Link, useNavigate,useParams, useSearchParams} from "react-router-dom"
import{Row,Col,Form,Button,Card,Image,ListGroup,ListGroupItem} from "react-bootstrap";
import Message from './Message';
const Cart = () => {
  const history =useNavigate();
  const{id}=useParams();
  const [param]=useSearchParams();
  const qty=Number(param.get("qty"));
  const dispatch=useDispatch();
  useEffect(() => {
   dispatch(addToCart(id,qty));
  }, [dispatch,id,qty]);
  
  const cart = useSelector((state) => state.cart);
  const item =cart;
  console.log(item);
  
  return (
    <>
    <Row>
      <Col md={8}>
      <h1>Shopping Cart</h1>
      {
      cart.length === 0?(
      <Message>
        Your Cart is Empty !<Link to="/">Start Shopping</Link>
        </Message>
        ):(
          <ListGroup variant='flush'>

          </ListGroup>
        )
      }
      </Col>

    </Row>
    </>
  )
}

export default Cart