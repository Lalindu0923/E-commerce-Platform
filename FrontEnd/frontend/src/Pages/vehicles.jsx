import VehicleProductDisplay from '../Product/vehicleProductcard'
import "../CSS/pagescss/vehicle.css";

const Vehicle = () => {
    return(
        <>
        <div className='vehicle-bg'>
            <div className="content">
                <div className="leftcontent">
                    <h1>This is Vehicle</h1>    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                        corporis tempora nam sequi perspiciatis iusto, eum vel quae
                        praesentium inventore officiis necessitatibus optio?
                        Cum nostrum corrupti voluptas, voluptatum aliquam quia.</p>
                </div>
                <div className="rightcontent">  
                    <h2>Special Offer today</h2>
                    <p>Explore a wide range of vehicles including cars, bikes, and accessories.</p>
                </div>
            </div>
                
        </div>
        <div>
            <VehicleProductDisplay/>
        </div>
        </>
    )
};

export default Vehicle;