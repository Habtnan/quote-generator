import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const { useState, useEffect } = React;

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("An error occurred. Please try again.");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  const tweetQuoteUrl = () => {
    return `https://twitter.com/intent/tweet?text="${encodeURIComponent(quote)}" - ${encodeURIComponent(author)}`;
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("div", { id: "text" }, "\"", quote, "\""), /*#__PURE__*/
    React.createElement("div", { id: "author" }, "- ", author), /*#__PURE__*/
    React.createElement("button", { id: "new-quote", onClick: handleNewQuote }, "New quote"), /*#__PURE__*/
    React.createElement("a", { id: "tweet-quote", href: tweetQuoteUrl(), target: "_blank", rel: "noopener noreferrer" }, "Tweet this")));


};

const root = ReactDOM.createRoot(document.getElementById("App"));
root.render( /*#__PURE__*/React.createElement(App, null));