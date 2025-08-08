 import { useParams } from "react-router-dom";
import products from '../../data/electronicProducts';
import "../../CSS/productdetail.css";


const BookProductDetail = () => {
    const {id} =useParams();
    console.log("URL ID:", id);
    const electronicproduct = products.find((p) => p.id === parseInt(id))
    console.log("router type:", electronicproduct.routeType);

    if(!electronicproduct){
        return <h2>Product not found</h2>
    }

    return (
    <>
    <div className="detail-container">
        <div className="bigimage">
            <img src={electronicproduct.largeimage} alt={electronicproduct.name} />
        </div>
        <div className="smallimage-Container">
            <div className="image">image</div>
            <div className="image">image</div>
            <div className="image">image</div>
        </div>

        <div className="text-container">
            <h1>{electronicproduct.name}</h1>                  
            <p>{electronicproduct.longDescription}</p>
            <p><strong>Price: ${electronicproduct.price} </strong></p>
            {electronicproduct.offer && <p className="offer"><strong>Offer: </strong> {products.offer} <span>${products.price}</span></p>}
            
            
        </div>
        <div className="button-container">
            <div className="quantity-selector">               
                    <p>Number of products remaining : {electronicproduct.remain} </p>
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

export default BookProductDetail;