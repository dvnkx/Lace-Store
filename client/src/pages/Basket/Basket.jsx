import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

import axios from "../../axios";
import { selectIsAuth } from "../../redux/slices/auth";
import { CardsSum } from "../../helpers/CardsSum";

import {
  EmptyContainer,
  Spinner,
  BasketContainer,
} from "../../components/ui/index";

const Basket = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state) => state.auth.data);

  const handleToBuy = () => {
    const orderData = {
      cost: CardsSum(cards),
      productsNames: cards.map((card) => card.model),
      productsImages: cards.map((card) => card.images[0]),
    };

    axios.patch(`/basket:${userData?._id}`, orderData).then((_) => {
      alert(`Your order now in proccess`);
      setCards([]);
    });
  };

  const handleToDelete = (cardId) => {
    axios.put(`/basket:${userData?._id}`, { cardId, type: "remove" });
    return setCards((prev) => prev.filter((card) => card._id !== cardId));
  };

  useEffect(() => {
    if (isAuth) {
      axios.get(`/basket:${userData?._id}`).then((res) => {
        setCards(res.data.cards);
        setIsLoading(false);
      });
    }
  }, [isAuth]);

  return (
    <div className="basket-container">
      {isLoading ? (
        <Spinner marginLeft={"45%"} />
      ) : cards.length === 0 ? (
        <EmptyContainer />
      ) : (
        <BasketContainer
          cards={cards}
          handleToDelete={handleToDelete}
          handleToBuy={handleToBuy}
        />
      )}
    </div>
  );
};

export default Basket;
