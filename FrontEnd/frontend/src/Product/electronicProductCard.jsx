import ProductCard from './productCard'; // ✅ Capitalized
import products from '../data/electronicProducts'; // ✅ Make sure this file exists
import '../CSS/product.css'

const ElectronicProductDisplay = () => {
  return (
    <div className="Container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          routeType="electronic"
          image={product.image}
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

export default ElectronicProductDisplay;