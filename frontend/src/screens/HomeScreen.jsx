import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'
import originalProducts from '../products'  // Renamed

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5001/api/products');
        setProducts(data);
      } catch (error) {
        console.error("There was an error fetching the data", error);
        setProducts(originalProducts);  // Use originalProducts if API call fails
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
