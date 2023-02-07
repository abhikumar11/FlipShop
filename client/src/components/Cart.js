import React, { useEffect } from 'react'
import {useDispatch} from "react-redux";
import {addToCart} from "../actions/CartAction";
import {useNavigate,useParams, useSearchParams} from "react-router-dom"
const Cart = () => {
  const history =useNavigate();
  const{id}=useParams();
  const [param]=useSearchParams();
  const {qty}=param.get("qty");
  const dispatch=useDispatch();
  useEffect(() => {
   dispatch(addToCart(id,qty));
  }, [dispatch,id,qty]);
  
  
  return (
    <div>Cart</div>
  )
}

export default Cart