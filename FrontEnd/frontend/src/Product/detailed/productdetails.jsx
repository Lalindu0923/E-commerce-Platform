 import { useParams } from "react-router-dom";
import products from '../../data/products';
import "../../CSS/productdetail.css";


const ProductDetail = () => {
    const {id} =useParams();
    const product = products.find((p) => p.id === parseInt(id))

    if(!product){
        return <h2>Product not found</h2>
    }

    return (
    <>
    <div className="detail-container">
        <div className="bigimage">
            <img src={product.largeimage} alt={product.name} />
        </div>
        <div className="smallimage-Container">
            <div className="image">image</div>
            <div className="image">image</div>
            <div className="image">image</div>
        </div>

        <div className="text-container">
            <h1>{product.name}</h1>                  
            <p>{product.longDescription}</p>
            <p><strong>Price: ${product.price} </strong></p>
            {product.offer && <p className="offer"><strong>Offer: </strong> {product.offer} <span>${product.price}</span></p>}
            
        </div>
        <div className="button-container">
            <div className="quantity-selector">               
                    <p>Number of products remaining : {product.remain} </p>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    defaultValue="1"
                    />
                
            </div>

            <button className="order-btn">Order Now</button>
            <button className="cart-btn">Add to Cart</button>
        </div>
    </div>
    </>
  );
};

export default ProductDetail;