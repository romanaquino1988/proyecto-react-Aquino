import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div>
         <FaCartArrowDown size={100} color='red'/>
         <p>0</p>
    </div>
  )
}

export default CartWidget