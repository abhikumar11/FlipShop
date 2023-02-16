import React,{useState} from 'react'
import {paymentMethod} from "../actions/CartAction";
import {Col,Form,Button,FormGroup,FormLabel} from "react-bootstrap";
import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const Payment = () => {
    const history =useNavigate();
    const dispatch =useDispatch();
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress.address) {
      history("/shipping");
    }

    const[payment,setPayment] =useState("paypal");
    const submitHandler = (e) => {
        e.preventDefault();
        
        dispatch(paymentMethod(payment));
        history("/placeorder");
      };
  return (
  <>
  <Checkout step1 step2 step3 />
  <h1>Payment Method</h1>
  <Form onSubmit={submitHandler}>
    <FormGroup>
      <FormLabel as="legend">Select Payment Method</FormLabel>
      <Col>
        <Form.Check
          type="radio"
          label="Paypal or Credit Card"
          id="paypal"
          name="paymentMethod"
          value="paypal"
          onChange={(e) => setPayment(e.target.value)}
        ></Form.Check>
      </Col>
    </FormGroup>
    <Button type="submit" variant="primary">
      Continue
    </Button>
  </Form>
</>
);
}

export default Payment