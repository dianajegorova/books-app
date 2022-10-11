import React, { useState, useEffect} from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Quote = () => {

    const [quotes, setQuotes] = useState([]);

    const getQuotes = async () => {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const quotes = await response.json();
        setQuotes(quotes);
    };

    useEffect(() => {
        getQuotes();
    }, [])

    return (
        <>
            <FaQuoteLeft/>
            <span>{quotes.setup}</span>
            <span>{quotes.punchline}</span>
            <FaQuoteLeft/>
        </>
    )
};

export default Quote;