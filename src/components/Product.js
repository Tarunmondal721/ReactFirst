
// Product Component - Receives Props (Product Details)
const Product = ({ ProductList }) => {
  console.log(ProductList);

  // Object Destructuring (Extracting values from props)
  const { title, rating, price, images } = ProductList;

  return (
    <div className="product">
      <img src={images} alt={title} />
      <h1>{title}</h1>
      <p>{rating} Rating</p>
      <p>Price: {price}</p>
      <button className="p_btn">Buy Now</button>
    </div>
  );
};
export default Product;