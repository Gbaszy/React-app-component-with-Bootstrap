// ProductCard.js
// ProductCard is a component that will display individual product.
import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "20rem" }} className="mb-4">
      <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
