import FashionProductDisplay from '../Product/fashionProductCard'
import "../CSS/pagescss/fashion.css";


const Fashion = () => {
    return(
        <>
        <div className='fashion-bg'>
            <div className="content">
                <div className="leftcontent">
                    <h1>This is Fashion</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                        corporis tempora nam sequi perspiciatis iusto, eum vel quae
                        praesentium inventore officiis necessitatibus optio?
                        Cum nostrum corrupti voluptas, voluptatum aliquam quia.</p>
                </div> 
                <div className="rightcontent">
                    <h2>Special Offer today</h2>
                    <p>Explore a wide range of fashion products including clothing, accessories, and footwear.</p>
                </div>
            </div> 

        </div>
        <div>
            <FashionProductDisplay/>
        </div>

        </>
    )
};

export default Fashion;