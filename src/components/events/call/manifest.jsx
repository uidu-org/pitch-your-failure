import React from 'react';
import { Element } from 'react-scroll';

import { Container, Row, Col } from 'reactstrap';

export default function Manifest({ call }) {
  return (
    <Element
      name="manifest"
      style={{
        backgroundImage: `url(${call.city.cover})`,
      }}
      className="manifest text-center"
    >
      <Container>
        <div className="manifest-quote">
          <p className="lead quote">
            Fear of failure is always a threat, holding down several
            initiatives.
            <br />
            But, when authentic reactions and genuine experience is shared,
            people feel stronger.
          </p>
          <br />
          <Row className="justify-content-center">
            <Col sm="4">
              <a href={call.link} className="btn btn-primary bnt-lg btn-block">
                Apply now and share your story
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </Element>
  );
}
