import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import {addToCart} from "../actions/CartAction";
import {useNavigate,useParams,useSearchParams} from "react-router-dom"
const Cart = () => {
  const history =useNavigate();
  const{id}=useParams();
  const [param] = useSearchParams();
  const qty=Number(param.get('qty'));
  return (
    <div>Cart</div>
  )
}

export default Cart