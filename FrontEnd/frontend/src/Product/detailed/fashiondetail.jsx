 import { useParams } from "react-router-dom";
import products from '../../data/fashionProducts';
import "../../CSS/productdetail.css";


const FashionProductDetail = () => {
    const {id} =useParams();
    const fashionproduct = products.find((p) => p.id === parseInt(id))

    if(!fashionproduct){
        return <h2>fashionproduct not found</h2>
    }

    return (
    <>
    <div className="detail-container">
        <div className="bigimage">
            <img src={fashionproduct.largeimage} alt={fashionproduct.name} />
        </div>
        <div className="smallimage-Container">
            <div className="image">image</div>
            <div className="image">image</div>
            <div className="image">image</div>
        </div>

        <div className="text-container">
            <h1>{fashionproduct.name}</h1>                  
            <p>{fashionproduct.longDescription}</p>
            <p><strong>Price: ${fashionproduct.price} </strong></p>
            {fashionproduct.offer && <p className="offer"><strong>Offer: </strong> {fashionproduct.offer} <span>${fashionproduct.price}</span></p>}
            
        </div>
        <div className="button-container">
            <div className="quantity-selector">               
                    <p>Number of fashionproducts remaining : {fashionproduct.remain} </p>
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

export default FashionProductDetail;