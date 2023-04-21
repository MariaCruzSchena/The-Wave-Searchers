import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";

const Item = ({ product }) => {
  const { idSetter } = useContext(ItemContext);

  const setIdentificatorHandler = () => {
    idSetter(product.id);
  };

  return (
    <div className="cardContainer">
      <Card className="cardBorder" style={{ width: "18rem", border: "none" }}>
        <Card.Img className="cardImg" variant="top" src={product.image} />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{product.title}</Card.Title>
          <Card.Text className="cardText">$ARS {product.price}</Card.Text>
          <Link to={`/detail/${product.id}`}>
            <button
              className="buttonsAddToCart"
              onClick={setIdentificatorHandler}
            >
              Detalle
            </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
