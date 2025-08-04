import ProductCard from './productCard'; // ✅ Capitalized
import products from '../data/vechicleProduct'; // ✅ Make sure this file exists
import '../CSS/product.css'

const VehicleProductDisplay = () => {
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

export default VehicleProductDisplay;
