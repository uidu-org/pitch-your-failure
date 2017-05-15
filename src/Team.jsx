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
        <Col md="3" sm="6" xs="6">
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
              <NavLink href="http://thelanguageproject.eu"><FontAwesome name="link"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://gr.linkedin.com/in/violettatsitsiliani/"><FontAwesome name="linkedin"></FontAwesome></NavLink>
            </NavItem>
          </Nav>
          <br className="hidden-md-up" />
          <br className="hidden-md-up" />
        </Col>
        <Col md="3" sm="6" xs="6">
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
              <NavLink href="http://www.yallaread.com"><FontAwesome name="link"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/ahmed-hadhri-76043a77/"><FontAwesome name="linkedin"></FontAwesome></NavLink>
            </NavItem>
          </Nav>
          <br className="hidden-md-up" />
          <br className="hidden-md-up" />
        </Col>
        <div className="w-100 d-inline hidden-md-up"></div>
        <Col md="3" sm="6" xs="6">
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
              <NavLink href="http://startupsuperschool.com"><FontAwesome name="link"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/andreagiarrizz/"><FontAwesome name="linkedin"></FontAwesome></NavLink>
            </NavItem>
          </Nav>
          <br className="hidden-md-up" />
          <br className="hidden-md-up" />
        </Col>
        <Col md="3" sm="6" xs="6">
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
              <NavLink href="https://uidu.org"><FontAwesome name="link"></FontAwesome></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="www.linkedin.com/in/andreavanini"><FontAwesome name="linkedin"></FontAwesome></NavLink>
            </NavItem>
          </Nav>
          <br className="hidden-md-up" />
          <br className="hidden-md-up" />
        </Col>
      </Row>
    </Container>
  </Element>
);

export default Team;