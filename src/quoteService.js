const fetchQuotes = async () => {
  try {
      let fetchedQuotes = [];
      let page = 1;
      while (fetchedQuotes.length < 60) {
          const response = await fetch(
              `https://api.quotable.io/quotes?page=${page}`
          );
          const data = await response.json();
          fetchedQuotes = fetchedQuotes.concat(data.results);
          page++;
      }
      return fetchedQuotes.slice(0, 60); // Limit to 60 quotes
  } catch (error) {
      console.error("Error fetching quotes: ", error);
      return [];
  }
};

const filterByDate = (quotes, selectedDate) => {
  if (selectedDate === "") {
      return quotes; // Reset to original list when "Select Date" is chosen
  } else {
      return quotes.filter(
          (quote) => quote.dateAdded.split("T")[0] === selectedDate
      );
  }
};

const filterByAuthor = (quotes, selectedAuthor) => {
  if (selectedAuthor === "") {
      return quotes; // Reset to original list when "Select Author" is chosen
  } else {
      return quotes.filter((quote) => quote.author === selectedAuthor);
  }
};

const sortByID = (quotes) => {
  return [...quotes].sort((a, b) => a._id.localeCompare(b._id));
};

const sortByAuthor = (quotes) => {
  return [...quotes].sort((a, b) => a.author.localeCompare(b.author));
};

export { fetchQuotes, filterByDate, filterByAuthor, sortByID, sortByAuthor };
