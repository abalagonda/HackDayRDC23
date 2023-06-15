import { useState } from "react";
import { MC, MainContainer, SC, SmallContainer, Text } from "./styles";
import NetworkingGraph from "../../components/Map/NetworkingGraph";

const CollaborativePage = () => {
  const quotes = [
    "You got this 👏",
    "My work ✨enhances✨ my life, but does not define 🙌 who I am",
    "Today is an opportunity to learn, grow 🌱, and to become a ✨better✨ version of myself",
    "Today will be a good day 🫶",
    "You learn more from failure than from 🏆 succcess 🏆"
  ];

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  const [quote, setQuote] = useState(getRandomQuote());
  return (<NetworkingGraph/>);
};
export default CollaborativePage;
