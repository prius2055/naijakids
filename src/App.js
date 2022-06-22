import { useEffect, useState } from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Timer from "./components/Timer";
import Container from "./components/Container";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetch("http://bit.ly/TeaserTask")
      .then((response) => response.json())
      .then((data) => setGameData(data));
  }, []);

  // gameData.map((game) => {
  //   console.log(game);
  // });

  console.log(gameData);
  // console.log(gameData[0]);
  // console.log(gameData.length);
  // console.log(typeof gameData);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Hero />
      <Timer />
      <Container gameDetail={gameData} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
