import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
        <Row>
            <Col className="text-center">
                <span>Copyright &copy; Flip Shop</span>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer;