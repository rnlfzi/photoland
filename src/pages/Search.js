import React from "react";

import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");

  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  console.log(data);
  return (
    <div className="mb-[30px] pt-40 lg:pt-7 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />
          <div>
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {data?.length > 0
                ? `${data?.length} results for ${searchTerm}`
                : `No results found for ${searchTerm}`}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product, i) => (
                <Product key={i} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
