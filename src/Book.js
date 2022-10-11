import React, { useState, useEffect} from 'react';
import books from './data';
import { FaRegStar } from 'react-icons/fa';

const Book = ( { id, img, title, rating, price, desc } ) => {

    const [readMore, setReadMore] = useState(false);

    const handleClick = () => {
        setReadMore(!readMore);
    }
        
        return (
        <article key={id} className="book">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <p><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/> {rating}</p>
            <h3>{price}</h3>
            <p className="description">
                {readMore ? desc : `${desc.substring(0, 100)}...   `}
                <button className="readmore-btn" onClick={handleClick}>
                    {readMore ? "Show less" : "Read more"}
                </button>
            </p>
        </article>
    )
}

export default Book;