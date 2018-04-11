import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NotFound = () => (
  <Row >
    <Col sm={12}>
      <div className="content-area padding-content white-color">
        <main className="main">
          <section className="error-404 not-found text-center">
            <h2 className="404">404</h2>
            <p className="lead">
              Sorry, we could not found the page you are looking for!
              </p>
            <Row>
              <Col sm={4} smOffset={4}>
                <Link to="/" className="go-back-home">Back to home page</Link>
              </Col>
            </Row>
          </section>
        </main>
      </div>
    </Col>
  </Row>
);

export default NotFound;