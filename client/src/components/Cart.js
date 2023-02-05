import React, { useEffect } from 'react'
import {useDispatch} from "react-redux";
import {addToCart} from "../actions/CartAction";
import {useNavigate,useParams} from "react-router-dom"
const Cart = () => {
  const history =useNavigate();
  const{id}=useParams();
  const dispatch=useDispatch();
  console.log(id);
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, 4));
    }
  }, [dispatch, id]);
  
  return (
    <div>Cart</div>
  )
}

export default Cart