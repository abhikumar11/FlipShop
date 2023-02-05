import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import {addToCart} from "../actions/CartAction";
import {useNavigate, useParams} from "react-router-dom"
const Cart = () => {
  const history =useNavigate();
  const param=useParams();
  const id=param.id;
  const qty=param.qty;
  return (
    <div>Cart</div>
  )
}

export default Cart