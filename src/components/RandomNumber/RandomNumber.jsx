import React, { useState } from "react";
import classes from "./RandomNumber.module.scss";

const RandomNumber = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [results, setResults] = useState(0);
  const [error, setError] = useState("");

  function getRandomNumber(min, max) {
    Math.ceil(min);
    Math.floor(max);
    if (min < max) {
      setResults(Math.floor(Math.random() * (max - min + 1) + min));
      setError("");
    } else {
      setError("Enter correct value!");
    }
    return results;
  }

  return (
    <div className={classes.RandomNumber}>
      <div className={classes.Results}>
        <span>Random number:</span>
        {" " + results}
      </div>
      <div className={classes.RangeOfNumbers}>
        <div className={classes.WrapperInput}>
          <label htmlFor="minNumber">Min:</label>
          <input
            id="minNumber"
            type="number"
            value={min}
            onChange={(event) => setMin(event.target.value)}
          />
        </div>
        <div className={classes.WrapperInput}>
          <label htmlFor="maxNumber">Max:</label>
          <input
            id="maxNumber"
            type="number"
            value={max}
            onChange={(event) => setMax(event.target.value)}
          />
        </div>
      </div>
      {error !== "" ? (
        <span className={classes.ErrorValue}>{error}</span>
      ) : null}
      <div>
        <button
          className={classes.Button}
          onClick={() => getRandomNumber(Number(min), Number(max))}
        >
          Get random number
        </button>
      </div>
    </div>
  );
};

export default RandomNumber;
