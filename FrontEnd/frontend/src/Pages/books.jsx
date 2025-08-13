import BookProductDisplay from '../Product/bookProductcard'
import "../CSS/pagescss/book.css";


const Books = () => {
    return(
        <>
        <div className='books-bg'>
            <div className="content">
                <div className="leftcontent">
                    <h1>This is Books</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis</p>
                </div>
                <div className="rightcontent">
                    <h2>Special Offer today</h2>
                    <p>Explore a wide range of books including fiction, non-fiction, and educational materials.</p>
                </div>
            </div>
        </div>
        <div>
            <BookProductDisplay/>
        </div>
        </>
    )
};

export default Books;