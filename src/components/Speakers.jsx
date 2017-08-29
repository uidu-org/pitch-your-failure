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

import abdullah from '../assets/images/abdullah.jpg';
import nermine from '../assets/images/nermine.jpg';
import andreag from '../assets/images/andreag.jpg';

export default function Speakers({ className }) {
  return (
    <Element name="speakers" className={className}>
      <Container>
        <h3>Speakers</h3>
        <br />
        <br />
        <br />
        <Row>
          <Col md="4" sm="6" xs="6">
            <img src={abdullah} className="img-fluid rounded" width="50%" />
            <br />
            <br />
            <p>
              <b>Abdullah Samy</b>
              <br />
              Children cry to get a toy! A guy may work without being paid!
There is a power drive those to do these actions. It is Passion. Passion can make you successful in something or fail in other. I started my own social initiative with great passion and it was working very well but suddenly I discovered something very weird related to passion part which pushed me and my initiative to fail. I can't wait to tell you what I discovered.
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
          <Col md="4" sm="6" xs="6">
            <img src={nermine} className="img-fluid rounded" width="50%" />
            <br />
            <br />
            <p>
              <b>Nermine Mounir</b>
              <br />
              An Organization is like a living organism involved in a continuous dance between the individual and the collective….I started my own initiative with a group of likeminded friends who shared the same aspirations to promote the culture of peace in the world. We were dancing together very well, with much focus, balance and harmony, until the dance was disturbed by the morass of interpersonal politics and painful meetings…
Can’t wait to share my failure story with you very soon
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
          <Col md="4" sm="6" xs="6">
            <img src={andreag} className="img-fluid rounded" width="50%" />
            <br />
            <br />
            <p>
              <b>Andrea Giarrizzo</b>
              <br />
              For young people only the sky is the limit. They don't know they are prepared to fail more everyone. They just have to believe in their selves and put everything in action. I founded Startup Super School, after failing with my YouTube Downloader, to teach young students how to create a Startup by a simple idea, learning form failure.
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
        </Row>
      </Container>
    </Element>
  );
}
