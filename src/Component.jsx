import { Deadlines } from "./Deadlines";
import { Giveaway } from "./Giveaway";
import ProductImage from "./ProductImage";
import { products } from "./utils/data";

export const Component = () => {

  return (
    <>
      <section className="section-center">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              {/* we cannot add key prop in <></> ,so use react.fragment instead */}
              <ProductImage productImage={product.productImage}></ProductImage>
              <article className="gift-info">
                <h3>{product.productName} AT DISCOUNT PRICE</h3>
                <Giveaway {...product}></Giveaway>
                <p>{product.desc}</p>
                <Deadlines {...product}></Deadlines>
              </article>
            </div>
          );
        })}
      </section>
    </>
  );
};
