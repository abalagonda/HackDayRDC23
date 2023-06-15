import { useState } from "react";
import { MC, MainContainer, SC, SmallContainer, Text } from "./styles";

const RemotePage = () => {
  const quotes = [
    "You got this 👏",
    "Today is an opportunity to learn, grow 🌱, and to become a ✨better✨ version of myself",
  ];

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  const [quote, setQuote] = useState(getRandomQuote());
  return <MainContainer>{quote}</MainContainer>;
};
export default RemotePage;
