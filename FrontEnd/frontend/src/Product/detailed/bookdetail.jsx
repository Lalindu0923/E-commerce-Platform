 import { useParams } from "react-router-dom";
import products from '../../data/bookProduct';
import "../../CSS/productdetail.css";


const BookProductDetail = () => {
    const {id} =useParams();
    console.log("URL ID:", id);
    const bookproduct = products.find((p) => p.id === parseInt(id))

    if(!bookproduct){
        return <h2>Product not found</h2>
    }

    return (
    <>
    <div className="detail-container">
        <div className="bigimage">
            <img src={bookproduct.largeimage} alt={bookproduct.name} />
        </div>
        <div className="smallimage-Container">
            <div className="image">image</div>
            <div className="image">image</div>
            <div className="image">image</div>
        </div>

        <div className="text-container">
            <h1>{bookproduct.name}</h1>                  
            <p>{bookproduct.longDescription}</p>
            <p><strong>Price: ${bookproduct.price} </strong></p>
            {bookproduct.offer && <p className="offer"><strong>Offer: </strong> {bookproduct.offer} <span>${bookproduct.price}</span></p>}
            
        </div>
        <div className="button-container">
            <div className="quantity-selector">               
                    <p>Number of bookproducts remaining : {bookproduct.remain} </p>
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