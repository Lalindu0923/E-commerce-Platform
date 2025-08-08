 import { useParams } from "react-router-dom";
import products from '../../data/vechicleProduct';
import "../../CSS/productdetail.css";


const VehicleProductDetail = () => {
    const {id} =useParams();
    const vehicleproduct = products.find((p) => p.id === parseInt(id))

    if(!vehicleproduct){
        return <h2>vehicleproduct not found</h2>
    }

    return (
    <>
    <div className="detail-container">
        <div className="bigimage">
            <img src={vehicleproduct.largeimage} alt={VehicleProductDetail.name} />
        </div>
        <div className="smallimage-Container">
            <div className="image">image</div>
            <div className="image">image</div>
            <div className="image">image</div>
        </div>

        <div className="text-container">
            <h1>{vehicleproduct.name}</h1>                  
            <p>{vehicleproduct.longDescription}</p>
            <p><strong>Price: ${vehicleproduct.price} </strong></p>
            {vehicleproduct.offer && <p className="offer"><strong>Offer: </strong> {vehicleproduct.offer} <span>${vehicleproduct.price}</span></p>}
            
        </div>
        <div className="button-container">
            <div className="quantity-selector">               
                    <p>Number of products remaining : {vehicleproduct.remain} </p>
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

export default VehicleProductDetail;