import Card from "./Card";
import "./Container.css";

import { useState } from "react";

const Container = (props) => {
  const [searchResult, setSearchResult] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
    setSearchResult(event.target.value);
  };


  return (
    <div className="container">
      <div className="container-box">
        <h1>Popular Games</h1>

        <div className="container-box__select">
          <select defaultValue={searchResult} onChange={searchHandler}>
            <option disabled>Filter by group and level</option>
            <optgroup label="Groups">
              <option>Academic</option>
              <option>Financial Literacy</option>
            </optgroup>

            <optgroup label="Levels">
              <option>Key stage 1</option>
              <option>Financial Literacy</option>
            </optgroup>
          </select>

          <input
            type="search"
            placeholder="Search for game by Topic,Level or Subject"
            onChange={searchHandler}
          />
        </div>

        <div className="card-container">
          {props.gameDetail
            .filter((detail) => {
              if (searchResult === "") {
                return detail;
              } else if (
                detail.Topic.toLowerCase().includes(searchResult.toLowerCase())
              ) {
                return detail;
              } else if (
                detail.Subject.toLowerCase().includes(
                  searchResult.toLowerCase()
                )
              ) {
                return detail;
              } else if (
                detail.Level.toLowerCase().includes(searchResult.toLowerCase())
              ) {
                return detail;
              } else if (
                detail.Group.toLowerCase().includes(searchResult.toLowerCase())
              ) {
                return detail;
              }
            })
            .map((game, key) => (
              <Card
                key={key}
                title={game.GameTitle}
                description={game.GameDescription}
                image={game.GameImage}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
