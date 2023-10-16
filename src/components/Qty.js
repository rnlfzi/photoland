import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
  const { handleInput, handleSelect } = useContext(CartContext);
  return (
    <div className="flex gap-x-6 items-center text-primary">
      {item.amount < 10 ? (
        <select
          onChange={(e) => handleSelect(e, item.id)}
          value={item.amount}
          className="p-2 rounded-lg w-[100px] h-12 outline-none text-primary"
        >
          {Array.from(Array(10).keys()).map((item, i) => (
            <option value={item + 1} key={i}>
              {item + 1} {item + 1 === 10 ? "+" : ""}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent"
          type="text"
          placeholder={`${item.amount}`}
          onBlur={(e) => handleInput(e, item.id)}
        />
      )}
    </div>
  );
};

export default Qty;
