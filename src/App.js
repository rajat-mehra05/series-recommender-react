import { useState } from "react";
import "./styles.css";
import { seriesData } from "./data";

export default function App() {
  const [selected, setSelected] = useState("fiction");

  function onClickHandler(category) {
    setSelected(category);
  }
  return (
    <>
      <div className="header">
        <span>Series Recommender</span>
      </div>
      <h3> List of series of different genres to watch </h3>

      <div className="category">
        {Object.keys(seriesData).map((category) => (
          <button
            className="btn-category"
            onClick={() => onClickHandler(category)}
          >
            <span> {category} </span>
          </button>
        ))}
      </div>

      <div className="series-category">
        <ul>
          {seriesData[selected].map((series) => (
            <li>
              <div className="s-name"> {series.name}</div>
              <div className="s-rating"> {series.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
