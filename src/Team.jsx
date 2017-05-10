import React from 'react';
import {
  Element,
} from 'react-scroll';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import './App.scss';
import andrea from './andrea.jpg';
import venue from './003-coliseum.png';

const Team = ({ className }) => (
  <Element name="team" className={className}>
    <Container className="text-center">
      <h3>Organized by</h3>
      <br />
      <br />
      <Row>
        <Col sm="3">
          <img src={venue} className="img-fluid img-circle" width="50%" />
          <br />
          <br />
          <p>
            <b>Violetta Tsitsiliani</b>
            <br />
            a freelance translator and graduate of Cultural Management from Panteion University, Greece.
          </p>
          <a href="https://goo.gl/forms/RE52Zs89F5zj4hKO2" className="btn btn-primary btn-block">Apply now</a>
        </Col>
        <Col sm="3">
          <img src={venue} className="img-fluid img-circle" width="50%" />
          <br />
          <br />
          <p>
            <b>Ahmed Hadhri</b>
            <br />
            a Marketing graduate from Tunis Business School in 2014.
          </p>
          <a href="https://goo.gl/forms/RE52Zs89F5zj4hKO2" className="btn btn-primary btn-block">Apply now</a>
        </Col>
        <Col sm="3">
          <img src={venue} className="img-fluid img-circle" width="50%" />
          <br />
          <br />
          <p>
            <b>Andrea Giarrizzo</b>
            <br />
            a Social Entrepreneur, an AshokaChangemakersXchange Alumni and Director of Kairos Society Italy
          </p>
          <a href="https://goo.gl/forms/RE52Zs89F5zj4hKO2" className="btn btn-primary btn-block">Apply now</a>
        </Col>
        <Col sm="3">
          <img alt="Andrea Vanini" src={andrea} className="img-fluid img-circle" width="50%" />
          <br />
          <br />
          <p>
            <b>Andrea Vanini</b>
            <br />
            a freelance translator and graduate of Cultural Management from Panteion University, Greece.
          </p>
          <a href="https://goo.gl/forms/RE52Zs89F5zj4hKO2" className="btn btn-primary btn-block">Apply now</a>
        </Col>
      </Row>
    </Container>
  </Element>
);

export default Team;