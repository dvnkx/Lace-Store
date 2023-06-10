import React, { useState } from "react";
import { useSelector } from "react-redux";

import { heart, filled_heart } from "../../../assets/index";

import axios from "../../../axios";

const CardInfo = ({
  cardId,
  brand,
  model,
  cost,
  materials,
  technology,
  generalHeight,
  soleHeight,
  fastener,
  color,
  sex,
}) => {
  const userData = useSelector((state) => state.auth.data);
  const [isFocused, setIsFocused] = useState(
    userData?.favorites.includes(cardId)
  );

  const handleFavorites = () => {
    axios.put(`/favorites:${userData?._id}`, { cardId }).then((res) => {
      if (res.data.message.includes("added")) {
        setIsFocused(true);
      } else {
        setIsFocused(false);
      }
    });
  };

  return (
    <div className="right">
      <div className="name">
        <h1>{model}</h1>
        <h2>{brand}</h2>
      </div>
      <div className="price-line">
        <h1>{cost}</h1>
        <h2>$</h2>
        <button className="heart">
          <img
            alt="heart"
            onClick={handleFavorites}
            src={isFocused ? filled_heart : heart}
          />
        </button>
        <button className="buy">Buy</button>
      </div>
      <div className="description">
        <h2>Materials :</h2>
        <ul>
          <li>{materials}</li>
        </ul>
        <h2>Sex :</h2>
        <ul>
          <li>{sex}</li>
        </ul>
        <h2>Color :</h2>
        <ul>
          <li>{color}</li>
        </ul>
        <h2>Fastener :</h2>
        <ul>
          <li>{fastener}</li>
        </ul>
        <h2>Technology :</h2>
        <ul>
          <li>{technology}</li>
        </ul>
        <h2>Height :</h2>
        <ul>
          <li>General heigth: {generalHeight}</li>
          <li>Sole heigth: {soleHeight}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardInfo;
