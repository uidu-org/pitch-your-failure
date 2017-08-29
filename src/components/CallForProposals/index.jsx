import React, { Component } from 'react';
import {
  Element,
  Helpers,
} from 'react-scroll';

import {
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

import venue from '../../assets/images/003-coliseum.png';
import entrepreneurs from '../../assets/images/002-startup.png';
import stage from '../../assets/images/001-story.png';
import rome from '../../assets/images/skyline.png';

import Supporters from '../Supporters';
import Team from '../Team';
import Manifest from '../Manifest';
import Timeline from '../Timeline';

const OurLink = Helpers.Scroll(props =>
  <a href="#" {...props}>
    {props.children}
  </a>,
);

export default class CallForProposals extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${rome})`,
          }}
          className="hero"
        >
          <Container>
            <Row>
              <Col md="6">
                <h1 className="display-1">Pitch your failure<small> in Rome</small></h1>
                <br />
                <h3>5<sup>th</sup> October 2017<br />TIM #Wcap Accelerator, Italy</h3>
                <br />
                <p className="lead">
                  Are you a <b>young social entrepreneur</b>
                  {' '}
                  from the Mediterranean region with a <b>project that failed</b>
                  {' '}
                  and you&apos;re <b>ready to share</b>
                  {' '}
                  your mistakes in public and inspire other people?
                </p>
                <p className="lead">
                  We pay you to come to Rome and tell us your story!
                </p>
                <br />
                <p className="lead">
                  <OurLink offset={-64} to="event" smooth>
                    <Button color="primary" size="lg">Learn More</Button>
                  </OurLink>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="section"
          style={{
            // backgroundColor: '#064466',
            // color: '#ffffff',
          }}
        >
          <Element name="event">
            <Container>
              <h3 className="display-6 text-center">{'We\'re looking for'}</h3>
              <h3 className="display-3 text-center"><s>Perfect stories</s><br />True stories</h3>
              <br />
              <br />
              <br />
              <Row>
                <Col sm="4" className="text-center">
                  <img alt="Entrepreneurs" src={entrepreneurs} width="40%" className="img-fluid" />
                  <br />
                  <br />
                  <h5>Social Ventures</h5>
                  <p>You ran a social venture that failed or experienced failures in your current venture</p>
                </Col>
                <Col sm="4" className="text-center">
                  <img alt="Stage" src={stage} width="40%" className="img-fluid" />
                  <br />
                  <br />
                  <h5>Willing to share</h5>
                  <p>You want to share your story of how you accepted failure itself and how you managed to turn it into an opportunity</p>
                </Col>
                <Col sm="4" className="text-center">
                  <img alt="Venue" src={venue} width="40%" className="img-fluid" />
                  <br />
                  <br />
                  <h5>Rome</h5>
                  <p>You want to do it in one of the most failure-feared countries, Italy and in one of the most beautiful cities in the world, Rome</p>
                </Col>
              </Row>
            </Container>
          </Element>
        </div>
        <Manifest />
        <Timeline className="section" />
        <Team className="section inverse" />
        <Supporters className="section" />
      </div>
    );
  }
}