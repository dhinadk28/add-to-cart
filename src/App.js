import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css'; // import custom CSS file for styling

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
    <Container className="my-4">
      <h1 className="text-center mb-4">Shop Homepage</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} className="mb-4">
            <Card>
              <Row noGutters>
                <Col md={4}>
                  <Card.Img src={product.image} />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      {product.description}
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span>Price: {product.price}</span>
                      <div>
                        <span className="mr-2">Rating: {product.rating}</span>
                        <Button
                          variant="primary"
                          disabled={cart.find((item) => item.id === product.id)}
                          onClick={() => handleAddToCart(product)}
                        >
                          {cart.find((item) => item.id === product.id)
                            ? 'Added to cart'
                            : 'Add to cart'}
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
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
  )  
};

export default App;
