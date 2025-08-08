import ProductCard from './productCard'; // ✅ Capitalized
import products from '../data/bookProduct'; // ✅ Make sure this file exists
import '../CSS/product.css'

const BookProductDisplay = () => {
  return (
    <div className="Container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          routeType="book"
          name={product.name}
          price={product.price}
          description={product.description}
          offer = {product.offer}
          longDescription = {product.longDescription}
        />
      ))}
    </div>
  );
};

export default BookProductDisplay;
