import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions/CartAction";
import {useNavigate,useParams, useSearchParams} from "react-router-dom"
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
  const{item} =cart;
  console.log(item);
  
  return (
    <div>Cart</div>
  )
}

export default Cart