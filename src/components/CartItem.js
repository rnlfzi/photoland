import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import { IoClose } from "react-icons/io5";

import Qty from "./Qty";

const CartItem = ({ item }) => {
  const { removeItemCart } = useContext(CartContext);
  return (
    <div className="flex gap-x-4">
      <Link to={`product/${item.id}`} className="w-[70px] h-[70px]">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt=""
        />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3 justify-between">
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div
            onClick={() => removeItemCart(item.id)}
            className="cursor-pointer text-[24px] hover:text-accent transition-all"
          >
            <IoClose />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          <div className="flex gap-x-4 mb-2">
            <Qty item={item} />
          </div>
          <div className="text-accent text-xl">
            ${item.attributes.price * item.amount}
          </div>
        </div>
        <div className="text-accent">${item.attributes.price} per piece</div>
      </div>
    </div>
  );
};

export default CartItem;
