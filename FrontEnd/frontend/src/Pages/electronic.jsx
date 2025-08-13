import ElectronicProductDisplay from '../Product/electronicProductCard';
import "../CSS/pagescss/electronic.css";


const Electronic = () => {
    return(
        <>
        <div className='electronic-bg'>
            <div className="content">
                <div className="leftcontent">
                    <h1>This is Electronic</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis 
                        corporis tempora nam sequi perspiciatis iusto, eum vel quae 
                        praesentium inventore officiis necessitatibus optio? 
                        Cum nostrum corrupti voluptas, voluptatum aliquam quia.</p>
                </div>
                <div className="rightcontent">
                    <h2>Special Offer today</h2>
                    <p>Explore a wide range of electronic products including smartphones, laptops, and accessories.</p>
                </div>
            </div>          
        </div>
        <div>
            <ElectronicProductDisplay/>
        </div>
        </>
    )
};

export default Electronic;