import ProductLink from "./ProductLink";

const OriginalPrice = ({ originalsubPrice, originalPrice, buyLink }) => {
  return (
    <div className="style-2">
      <span className="orgAmount">
        {originalPrice},<sup>{originalsubPrice}</sup>
      </span>
      <ProductLink
        price={originalPrice}
        subprice={originalsubPrice}
        buyLink={buyLink}
      ></ProductLink>
    </div>
  );
};

export default OriginalPrice;
