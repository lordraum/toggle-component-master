import { useContext } from "react";
import { ToggleContext } from "../contexts/ToggleContext";
import Card from "./Card";
import CardBody from "./CardBody";
import CardBenefit from "./CardBenefit";
import { data } from "../data/data";

const Cards = () => {
  const { toggleValue } = useContext(ToggleContext);
  return (
    <section className="cards">
      {data.map((x) => (
        <Card
          key={x.id}
          title={x.name}
          price={toggleValue === "right" ? x.price_monthly : x.price_anually}
        >
          <CardBody>
            {x.benefits.map((y, j) => (
              <CardBenefit key={j} benefit={y} />
            ))}
          </CardBody>
        </Card>
      ))}
    </section>
  );
};

export default Cards;
