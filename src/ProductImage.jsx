import React from "react";

const ProductImage = ({ productImage }) => {
  return (
    <article className="gift-img">
      <img src={productImage} alt="gift" />
    </article>
  );
};

export default ProductImage;
