import { useParams } from "react-router-dom";
import products from '../../data/fashionProducts';
import "../../CSS/productdetail.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ReletedProduct from '../../Components/reletedProducts/reletedProduct';
import { useContext, useState } from "react";
import { ShopContext } from '../../Components/Contex/shopcontex';

const FashionProductDetail = () => {
    const { id } = useParams();
    const fashionproduct = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useContext(ShopContext);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("XM");

    if (!fashionproduct) {
        return <h2>Product not found</h2>;
    }

    const handleQuantityChange = (e) => {
        const inputValue = e.target.value;
        
        // Allow empty input while typing
        if (inputValue === '') {
            setQuantity('');
            return;
        }
        
        let newQuantity = parseInt(inputValue, 10);
        
        // Check if the parsed value is a valid number
        if (isNaN(newQuantity)) {
            return; // Don't update if not a valid number
        }
        
        // Ensure quantity is at least 1 and doesn't exceed remaining stock
        const maxStock = fashionproduct.remain || 999; // Fallback if remain is undefined
        newQuantity = Math.max(1, newQuantity);
        newQuantity = Math.min(maxStock, newQuantity);
        
        setQuantity(newQuantity);
    };

    // Handle blur event to ensure we always have a valid quantity
    const handleQuantityBlur = () => {
        if (quantity === '' || quantity < 1) {
            setQuantity(1);
        }
    };

    const handleAddToCart = () => {
        const finalQuantity = quantity === '' ? 1 : quantity;
        console.log("Adding to cart:", {
            id: fashionproduct.id,
            name: fashionproduct.name,
            quantity: finalQuantity,
            size
        });
        addToCart(fashionproduct.id, finalQuantity, size);
    };

    return (
        <>
            <div className="detail-container">
                {/* Product Image */}
                <div className="bigimage">
                    <img src={fashionproduct.largeimage} alt={fashionproduct.name} />
                </div>

                {/* Small Images */}
                <div className="smallimage-Container">
                    <div className="image">image</div>
                    <div className="image">image</div>
                    <div className="image">image</div>
                </div>

                {/* Product Details */}
                <div className="text-container">
                    <h1>{fashionproduct.name}</h1>

                    {/* Rating */}
                    <div className="rating-container">
                        {[...Array(5)].map((_, index) => {
                            const starValue = index + 1;
                            if (fashionproduct.rating >= starValue) {
                                return <FaStar key={index} color="#ffc107" />;
                            } else if (fashionproduct.rating >= starValue - 0.5) {
                                return <FaStarHalfAlt key={index} color="#ffc107" />;
                            } else {
                                return <FaRegStar key={index} color="#ffc107" />;
                            }
                        })}
                        <span> ({fashionproduct.rating})</span>
                    </div>

                    {/* Description */}
                    <p>{fashionproduct.longDescription}</p>
                    <p><strong>Price: ${fashionproduct.price.toFixed(2)} </strong></p>

                    {/* Offer */}
                    {fashionproduct.offer && (
                        <p className="offer">
                            <strong>Offer: </strong> {fashionproduct.offer} <span>${fashionproduct.price}</span>
                        </p>
                    )}
                </div>

                {/* Quantity, Size, and Buttons */}
                <div className="button-container">
                    <div className="quantity-selector">
                        <p>Number of products remaining: {fashionproduct.remain || 'N/A'}</p>

                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            max={fashionproduct.remain || 999}
                            value={quantity}
                            onChange={handleQuantityChange}
                            onBlur={handleQuantityBlur}
                        />

                        <label htmlFor="size">Size:</label>
                        <select 
                            id="size" 
                            name="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>

                    <button className="order-btn">Order Now</button>
                    <button onClick={handleAddToCart} className="cart-btn">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="reletedproducts">
                <ReletedProduct />
            </div>
        </>
    );
};

export default FashionProductDetail;