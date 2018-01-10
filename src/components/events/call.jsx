import React, { Component } from 'react';
import { Element } from 'react-scroll';

import { Container, Row, Col } from 'reactstrap';
import entrepreneurs from '../../assets/images/002-startup.png';
import stage from '../../assets/images/001-story.png';

import Manifest from './call/manifest';
import Timeline from './call/timeline';

export default class Call extends Component {
  render() {
    const { event } = this.props;
    return (
      <div
        className="section"
        style={
          {
            // backgroundColor: '#064466',
            // color: '#ffffff',
          }
        }
      >
        <Element name="application" className="section">
          <Container>
            <h3 className="display-6 text-center">We're looking for</h3>
            <h3 className="display-3 text-center">
              <s>Perfect stories</s>
              <br />True stories
            </h3>
            <br />
            <br />
            <br />
            <Row>
              <Col sm="4" className="text-center">
                <img
                  alt="Entrepreneurs"
                  src={entrepreneurs}
                  className="img-fluid w-50"
                />
                <br />
                <br />
                <h5>Social Ventures</h5>
                <p>
                  You ran a social venture that failed or experienced failures
                  in your current venture
                </p>
              </Col>
              <Col sm="4" className="text-center">
                <img alt="Stage" src={stage} className="img-fluid w-50" />
                <br />
                <br />
                <h5>Willing to share</h5>
                <p>
                  You want to share your story of how you accepted failure
                  itself and how you managed to turn it into an opportunity
                </p>
              </Col>
              <Col sm="4" className="text-center">
                <img
                  alt="Venue"
                  src={event.call.city.icon}
                  className="img-fluid w-50"
                />
                <br />
                <br />
                <h5>{event.call.city.name}</h5>
                <p>{event.call.city.description}</p>
              </Col>
            </Row>
          </Container>
        </Element>
        <Manifest call={event.call} />
        <Timeline
          event={event}
          timeline={event.call.timeline}
          className="section"
        />
      </div>
    );
  }
}
