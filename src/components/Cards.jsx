import React from "react";
import Card from "./Card";
import CardBody from "./CardBody";
import CardBenefit from "./CardBenefit";

const Cards = () => {
  return (
    <section className="cards">
      <Card title="Basic" price="199.99">
        <CardBody>
          <CardBenefit benefit="500 GB Storage" />
          <CardBenefit benefit="2 Users Allowed" />
          <CardBenefit benefit="Send up to 3 GB" />
        </CardBody>
      </Card>
      <Card title="Basic" price="199.99">
        <CardBody>
          <CardBenefit benefit="500 GB Storage" />
          <CardBenefit benefit="2 Users Allowed" />
          <CardBenefit benefit="Send up to 3 GB" />
        </CardBody>
      </Card>
      <Card title="Basic" price="199.99">
        <CardBody>
          <CardBenefit benefit="500 GB Storage" />
          <CardBenefit benefit="2 Users Allowed" />
          <CardBenefit benefit="Send up to 3 GB" />
        </CardBody>
      </Card>
    </section>
  );
};

export default Cards;
