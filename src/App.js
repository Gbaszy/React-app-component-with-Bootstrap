import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import products from "./components/product";
import ProductCard from "./components/ProductCard";
import NavigationBar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <NavigationBar/>
    <Container className="mt-5">
      <Row>
        {products.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default App;
