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
            Founder of TheLanguageProject.eu, R. Bosch START program Alumna & cultural manager
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
            Founder of YallaRead.com,<br />Injaz Al Arab Alumni, Hult Prize Alumni & Enpact fellow
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
            Director Kairos Society Italy, Social Entrepreneur, founder of YouTube Downloader & StartupSuperSchool.com
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
            Founder of uidu.org, Changemaker and Social Entrepreneur, Councilor in an Italian municipality
          </p>
          <Nav style={{
            display: 'inline-flex',
          }}>
            <NavItem>
              <NavLink href="https://www.facebook.com/apuntovanini"><FontAwesome name="facebook"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://uidu.org"><FontAwesome name="link"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="www.linkedin.com/in/andreavanini"><FontAwesome name="linkedin"></FontAwesome></NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </Container>
  </Element>
);

export default Team;