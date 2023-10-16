import React from "react";

import { FiX } from "react-icons/fi";

import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { data } = useFetch("/categories");
  return (
    <div className="w-full h-full bg-primary p-8">
      <div
        onClick={() => setCatNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((category, i) => (
          <Link
            key={i}
            to={`/products/${category.id}`}
            className="text-[15px] uppercase font-medium cursor-pointer hover:text-accent transition-all"
          >
            {category.attributes.title} Cameras
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
