import React from 'react';
import {
  Element,
} from 'react-scroll';

import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import './App.scss';
import andrea from './andrea.jpg';
import ahmed from './ahmed.jpg';
import violetta from './violetta.jpg';
import andreag from './andreag.jpg';

const Team = ({ className }) => (
  <Element name="team" className={className}>
    <Container className="text-center">
      <h3>Organized by</h3>
      <br />
      <br />
      <br />
      <Row>
        <Col sm="3">
          <img src={violetta} className="img-fluid rounded" width="50%" />
          <br />
          <br />
          <p>
            <b>Violetta Tsitsiliani</b>
            <br />
            a freelance translator and graduate of Cultural Management from Panteion University, Greece.
          </p>
          <Nav style={{
            display: 'inline-flex',
          }}>
            <NavItem>
              <NavLink href="#"><FontAwesome name="facebook"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesome name="link"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesome name="linkedin"></FontAwesome></NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col sm="3">
          <img src={ahmed} className="img-fluid rounded" width="50%" />
          <br />
          <br />
          <p>
            <b>Ahmed Hadhri</b>
            <br />
            a Marketing graduate from Tunis Business School in 2014.
          </p>
          <Nav style={{
            display: 'inline-flex',
          }}>
            <NavItem>
              <NavLink href="#"><FontAwesome name="facebook"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesome name="link"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesome name="linkedin"></FontAwesome></NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col sm="3">
          <img src={andreag} className="img-fluid rounded" width="50%" />
          <br />
          <br />
          <p>
            <b>Andrea Giarrizzo</b>
            <br />
            a Social Entrepreneur, an AshokaChangemakersXchange Alumni and Director of Kairos Society Italy
          </p>
          <Nav style={{
            display: 'inline-flex',
          }}>
            <NavItem>
              <NavLink href="#"><FontAwesome name="facebook"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesome name="link"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesome name="linkedin"></FontAwesome></NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col sm="3">
          <img alt="Andrea Vanini" src={andrea} className="img-fluid rounded" width="50%" />
          <br />
          <br />
          <p>
            <b>Andrea Vanini</b>
            <br />
            a freelance translator and graduate of Cultural Management from Panteion University, Greece.
          </p>
          <Nav style={{
            display: 'inline-flex',
          }}>
            <NavItem>
              <NavLink href="#"><FontAwesome name="facebook"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesome name="link"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><FontAwesome name="linkedin"></FontAwesome></NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </Container>
  </Element>
);

export default Team;