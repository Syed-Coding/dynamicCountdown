import { Deadlines } from "./Deadlines";
import { Giveaway } from "./Giveaway";
import ProductImage from "./ProductImage";
import { products } from "./utils/data";
import React from "react";

export const Component = () => {
  return (
    <>
      <section className="section-center">
        {products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              {/* we cannot add key prop in <></> ,so use react.fragment instead */}
              <ProductImage productImage={product.productImage}></ProductImage>
              <article className="gift-info">
                <h3>{product.productName} AT DISCOUNT PRICE</h3>
                <Giveaway {...product}></Giveaway>
                <p>{product.desc}</p>
                <Deadlines {...product}></Deadlines>
              </article>
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};
