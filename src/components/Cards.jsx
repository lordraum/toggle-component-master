import Card from "./Card";
import CardBody from "./CardBody";
import CardBenefit from "./CardBenefit";
import { data } from "../data";

const Cards = () => {
  return (
    <section className="cards">
      {data.map((x) => (
        <Card key={x.id} title={x.name} price={x.price_anually}>
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
