import { ProductData } from "../utils/constant";
import Product from "./Product";


// Product Card Component - Displays Multiple Products

//name Export
export const ProductCard = () => {
    return (
      <div className="product_card">
        {/* Looping through ProductData array and passing each product to the Product component */}
        {ProductData.map((product, index) => {
          return <Product key={product.id} ProductList={product} />;
        })}
      </div>
    );
  };
  