import React, { Component } from 'react';
import {
  Element,
  Helpers,
} from 'react-scroll';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

import FontAwesome from 'react-fontawesome';

import './App.scss';
import venue from './003-coliseum.png';
import entrepreneurs from './002-startup.png';
import stage from './001-story.png';
import rome from './skyline.png';

import Supporters from './Supporters';
import Team from './Team';
import Manifest from './Manifest';
import Timeline from './Timeline';

const OurLink = Helpers.Scroll(props =>
  <a href="#" {...props}>
    {props.children}
  </a>,
);

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Navbar toggleable light>
            <NavbarToggler type="inverse" right onClick={this.toggle} />
            <NavbarBrand href="#">PitchYourFailure</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <OurLink
                    className="nav-link"
                    offset={-64}
                    to="event"
                    smooth
                  >
                    About the event
                  </OurLink>
                </NavItem>
                <NavItem>
                  <OurLink
                    className="nav-link"
                    offset={-64}
                    to="team"
                    smooth
                  >
                    Team
                  </OurLink>
                </NavItem>
                <NavItem>
                  <OurLink
                    className="nav-link"
                    offset={-64}
                    to="supporters"
                    smooth
                  >
                    Supporters
                  </OurLink>
                </NavItem>
                <NavItem>
                  <OurLink
                    className="nav-link"
                    offset={-64}
                    to="manifest"
                    smooth
                  >
                    How to apply
                  </OurLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
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
                <p className="lead">
                  Are you a <b>young social entrepreneur</b>
                  {' '}
                  from the Mediterranean region with a <b>project that failed</b>
                  {' '}
                  and you&apos;re <b>ready to share</b>
                  {' '}
                  your mistakes in public <i>and inspire other people</i>?
                </p>
                <p className="lead">
                  We pay you to come to Rome and tell us your story!
                </p>
                <p className="lead">
                  <OurLink offset={-64} to="event" smooth>
                    <Button color="primary">Learn More</Button>
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
        <div className="section inverse">
          <Container className="text-center">
            <p className="m-b-0">&copy; Made with <FontAwesome name="heart" /> by uidu</p>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
