import ProductLink from "./ProductLink";

const DiscountedPrice = ({
  discountedPrice,
  discountedsubPrice,
  originalsubPrice,
  originalPrice,
  buyLink,
}) => {
  return (
    <>
      <div className="style-1">
        <del>
          <span className="amount">
            {originalPrice} <sup>{originalsubPrice}</sup>
          </span>
        </del>
        <ins>
          <span className="amount">
            {discountedPrice}
            <sup>{discountedsubPrice}</sup>
          </span>
        </ins>
      </div>
      <ProductLink
        price={discountedPrice}
        subprice={discountedsubPrice}
        buyLink={buyLink}
      ></ProductLink>
    </>
  );
};

export default DiscountedPrice;
