import React, { useState, useEffect } from 'react';

const Quote = () => {
  // State that holds the quotes and manages it's loading and error states
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetching from the API
  //   const fetchQuote = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://api.api-ninjas.com/v1/quotes?humor',
  //       );
  //       if (!response.ok) {
  //         throw new Error(`Something went wrong! Status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setQuote(data.quote);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const category = 'happiness';
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
        setQuote(data.quote);
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
      {!loading && !error && <p>{quote}</p>}
    </div>
  );
};

export default Quote;
