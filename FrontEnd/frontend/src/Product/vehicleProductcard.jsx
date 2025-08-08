import ProductCard from './productCard'; 
import products from '../data/vechicleProduct';
import '../CSS/product.css'

const VehicleProductDisplay = () => {
  return (
    <div className="Container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          routeType="vehicle"          
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

export default VehicleProductDisplay;
