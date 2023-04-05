import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    rating: 4,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
    rating: 5,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 30,
    rating: 3,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 40,
    rating: 4,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 50,
    rating: 5,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 60,
    rating: 3,
    image: 'https://via.placeholder.com/150',
  },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="app">
      <Container fluid className="my-4">
        <h1 className="text-center mb-4">Shop Homepage</h1>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Card.Text>Rating: {product.rating}</Card.Text>
                  <Button
                    variant="primary"
                    disabled={cart.find((item) => item.id === product.id)}
                    onClick={() => handleAddToCart(product)}
                  >
                    {cart.find((item) => item.id === product.id)
                      ? 'Added to cart'
                      : 'Add to cart'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {cart.length > 0 && (
          <div className="mt-4">
            <h2>Shopping Cart</h2>
            <ul className="list-group">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.name} - {item.price}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default App;
