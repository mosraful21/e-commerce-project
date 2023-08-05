import React from "react";
import { FlashSalesData } from "../../../Data/FlashSalesData";

const FlashSalesProducts = () => {
  return (
    <div className="my-28">
      <h3 className="heading">Flash Sales Products</h3>
      <div className="common-container">
        {FlashSalesData.map((product, index) => (
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
            <div className="flex justify-evenly mb-2 gap-1">
              <button className="group-btn hover:bg-blue-700">
                Add to Card
              </button>
              <button className="group-btn hover:bg-blue-600">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSalesProducts;
