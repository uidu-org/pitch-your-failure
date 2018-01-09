import React, { Component } from 'react';
import { Element } from 'react-scroll';

import { Container, Row, Col } from 'reactstrap';

export default class Venue extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false,
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const { event, event: { venue } } = this.props;
    return (
      <Element
        name="venue"
        style={{
          backgroundImage: `url(${venue.cover})`,
        }}
        className="manifest text-center"
      >
        <Container>
          <div className="manifest-quote">
            <h3>Venue</h3>
            <br />
            <br />
            <br />
            <h6>{venue.name}</h6>
            <br />
            <p className="lead quote">{venue.description}</p>
            <br />
            <Row className="justify-content-center">
              {venue.photos &&
                Object.keys(venue.photos).map(photoKey => (
                  <Col sm="3" key={photoKey}>
                    <img
                      src={venue.photos[photoKey]}
                      className="img-fluid rounded"
                      alt={venue.name}
                    />
                  </Col>
                ))}
            </Row>
            <br />
            {event.ticket && (
              <Row className="justify-content-center">
                <Col sm="4">
                  <a
                    className="btn btn-primary bnt-lg btn-block"
                    href={event.ticket}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Signup for the event
                  </a>
                </Col>
              </Row>
            )}
          </div>
        </Container>
      </Element>
    );
  }
}
