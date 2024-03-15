import React, { useState, useEffect } from "react";
import {
    fetchQuotes,
    filterByDate,
    filterByAuthor,
    sortByID,
    sortByAuthor,
} from "./quoteService";
import "./css/app.css";

const QuoteApp = () => {
    const [quotes, setQuotes] = useState([]);
    const [originalQuotes, setOriginalQuotes] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedQuotes = await fetchQuotes();
            setQuotes(fetchedQuotes);
            setOriginalQuotes(fetchedQuotes);

            const uniqueAuthors = [
                ...new Set(fetchedQuotes.map((quote) => quote.author)),
            ];
            setAuthors(uniqueAuthors);

            const uniqueDates = [
                ...new Set(fetchedQuotes.map((quote) => quote.dateAdded.split("T")[0])),
            ];
            setDates(uniqueDates);
        };

        fetchData();
    }, []);

    const handleFilter = (filterType, selectedValue) => {
        let filteredQuotes = originalQuotes;
        if (filterType === "date") {
            filteredQuotes = filterByDate(filteredQuotes, selectedValue);
        } else if (filterType === "author") {
            filteredQuotes = filterByAuthor(filteredQuotes, selectedValue);
        }
        setQuotes(filteredQuotes);
    };

    const handleSort = (sortType) => {
        let sortedQuotes = [...quotes];
        if (sortType === "id") {
            sortedQuotes = sortByID(sortedQuotes);
        } else if (sortType === "author") {
            sortedQuotes = sortByAuthor(sortedQuotes);
        }
        setQuotes(sortedQuotes);
    };

    return (
        <>
            <div className="quotes-wrapper">
                <div className="filter-wrapper">
                    <h2 className="filter-heading">Filter Quotes: </h2>

                    {/* dropdown for filtering by date */}
                    <div className="select-wrapper">
                        <select
                            onChange={(e) => handleFilter("date", e.target.value)}
                            name="select date"
                            className="select"
                        >
                            <option value="">Select Date</option>
                            {dates.map((date, index) => (
                                <option key={index} value={date}>
                                    {date}
                                </option>
                            ))}
                        </select>

                        {/* Dropdown for filtering by author */}
                        <select
                            onChange={(e) => handleFilter("author", e.target.value)}
                            name="select author"
                            className="select"
                        >
                            <option value="">Select Author</option>
                            {authors.map((author, index) => (
                                <option key={index} value={author}>
                                    {author}
                                </option>
                            ))}
                        </select>

                        {/* Dropdown for sorting by ID and Author */}
                        <select
                            onChange={(e) => handleSort(e.target.value)}
                            name="sort"
                            className="select"
                        >
                            <option value="">Sort Quotes</option>
                            <option value="id">Sort by ID</option>
                            <option value="author">Sort by Author</option>
                        </select>
                    </div>
                </div>

                <div className="quotes-container">
                    <h1 className="quotes-heading">Quotes</h1>
                    <ul className="quotes-list">
                        {quotes.map((quote, index) => (
                            <li key={index} className="quote-item">
                                <p className="quote-id"><b>ID: </b>{quote._id}</p>
                                <p><b>Quote: </b><q className="quote-content">{quote.content}</q></p>
                                <p className="quote-author"><b>Author: </b>{quote.author}</p>
                                <p className="quote-date"><b>Date: </b>{quote.dateAdded}</p>
                            </li> 
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default QuoteApp;
