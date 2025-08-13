import ProductCard from './productCard'; // ✅ Capitalized
import products from '../data/fashionProducts'; // ✅ Make sure this file exists

const FashionProductDisplay = () => {
  return (
    <div className="Container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          routeType="fashion"
          image={product.image}
          name={product.name}
          price={product.price.toFixed(2)}
          description={product.description}
          offer = {product.offer}
          longDescription = {product.longDescription}
        />
      ))}
    </div>
  );
};

export default FashionProductDisplay;