import "../CSS/home.css";
import ProductDisplay from '../Product/ProductDisplay';
import NewLetter from "../Components/newLetter";

const Home = () => {
    return(
        <><div className="home-bg">
            <div className="home-content">               
                <div className="home-left-content">
                    <h1>New Collection is Avaiable</h1>
                    <p>New Products has been restoked.<br />
                        Try out your new Fasion colletion for the Gens</p>
                    <button>
                        Show more ---
                    </button>
                </div>
                <div className="home-right-content">
                    <h1>Welcome Back Deal</h1>
                    <p>Special offer for the loyal customers Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Perspiciatis voluptatibus asperiores maiores, nulla laudantium ullam inventore dolorem quaerat? <br /> Fugiat odio,quis corporis quisquam quidem officiis nesciunt ullam impedit expedita repellat!</p>
                    <button>
                        Show more ---
                    </button>
                </div>
            </div>
        </div>
        <div className="items">
            <ProductDisplay/>
        </div>
        <div className="newLetterhome">
            <div className="newlettercontainor">
                <NewLetter />
            </div>
        </div>
            </>
    )
};

export default Home;