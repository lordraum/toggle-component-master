import React from "react";
import Card from "./Card";
import CardBody from "./CardBody";
import CardBenefit from "./CardBenefit";

const Cards = () => {
  return (
    <section className="cards">
      <Card title="Tarjeta1" price="0">
        <CardBody>
          <CardBenefit benefit="asdfasdf" />
          <CardBenefit benefit="asdfasdf" />
          <CardBenefit benefit="asdfasdf" />
        </CardBody>
      </Card>
    </section>
  );
};

export default Cards;
