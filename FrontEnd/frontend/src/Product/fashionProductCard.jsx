import ProductCard from './productCard'; // ✅ Capitalized
import products from '../data/fashionProducts'; // ✅ Make sure this file exists
import '../CSS/product.css'

const FashionProductDisplay = () => {
  return (
    <div className="Container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}
          offer = {product.offer}
        />
      ))}
    </div>
  );
};

export default FashionProductDisplay;