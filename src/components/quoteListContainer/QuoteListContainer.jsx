import React from "react";
import QuoteCard from "./quoteCard/QuoteCard";

import { useQuoteListContext } from "../../contexts/quoteListContext";

const QuoteListContainer = () => {
  const { quoteList } = useQuoteListContext();

  console.log("quoter component", quoteList);
  return (
    <>
      <h1 className="text-3xl font-bold">Pressupostos en curs:</h1>
      <div className="">
        {quoteList.map((quote, index) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </>
  );
};

export default QuoteListContainer;
