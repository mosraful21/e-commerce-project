import React from "react";
import { categoriesData } from "../../../Data/CategoriesData";

const Categories = () => {
  return (
    <div className="my-28">
      <h3 className="heading">Categories</h3>
      <div className="category-container">
        {categoriesData.map((product, index) => (
          <div className="card" key={index}>
            <img className="w-full" src={product.img} alt="" />
            <div className="p-2">
              <p className={`pName after:content-['*'] after:ml-2`}>
                We use cookies
              </p>
              <p className="price">
                <span>
                  <del className="text-orange-700">$25.00</del>{" "}
                  <span>$20.00</span>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="see-more">
          <a href="/">See More</a>
        </button>
      </div>
    </div>
  );
};

export default Categories;
