const ProductLink = ({ price, subprice, buyLink }) => {
  return (
    <a href={buyLink} target="_blank" rel="noreferrer" className="buy--btn">
      BUY NOW {price},<sup>{subprice}</sup>
    </a>
  );
};

export default ProductLink;
