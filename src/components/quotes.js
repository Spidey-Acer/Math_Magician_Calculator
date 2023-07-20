import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetching data
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const category = 'men';
        const apiKey = '0DY4H1KwPw4hMxbGwTy0QA==q4jslPWDGXAxSLbc';
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: { 'X-Api-Key': apiKey },
          },
        );

        if (!response.ok) {
          throw new Error(`Something went wrong! Status: ${response.status}`);
        }

        const data = await response.json();
        setQuote(data[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  // Loading state
  return (
    <div>
      <h1>Quote of the day</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <p>{quote.quote}</p>
          <p>
            -
            {quote.author}
          </p>
          <p>
            Category the quote fall in:
            {quote.category}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quote;
