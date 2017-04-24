import React, { Component } from 'react';
import {
  Link,
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
  NavLink,
  Card,
  CardBlock,
  CardText,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

import './App.scss';
import logo from './logo.svg';
import venue from './003-coliseum.png';
import entrepreneurs from './002-startup.png';
import stage from './001-story.png';
import rome from './skyline.png';

const OurLink = Helpers.Scroll((props) => {
  return (
    <a href="#" {...props}>
      {props.children}
    </a>
  );
});;

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
        <Navbar toggleable>
          <Container>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">PitchYourFailure</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <OurLink className="nav-link" offset={-64} to="manifest" smooth>Manifest</OurLink>
                </NavItem>
                <NavItem>
                  <OurLink className="nav-link" offset={-64} to="event" smooth>About the event</OurLink>
                </NavItem>
                <NavItem>
                  <OurLink className="nav-link" offset={-64} to="apply" smooth>How to apply</OurLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <div
          style={{
            backgroundImage: `url(${rome})`,
          }}
          className="hero"
        >
          <Container>
            <Row>
              <Col sm="6">
                <h1 className="display-1">Pitch your failure<small> in Rome</small></h1>
                <br />
                <p className="lead">
                  Are you a <b>young social entrepreneur</b> from the Mediterranean region with a <b>project that failed</b> and you&apos;re <b>ready to share</b> your mistakes in public?
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
            backgroundColor: `#064466`,
            color: '#ffffff',
          }}
        >
          <Element name="event">
            <Container>
              <h3 className="display-6 text-center">We're looking for</h3>
              <h3 className="display-3 text-center"><s>Perfect stories</s><br />True stories</h3>
              <br />
              <br />
              <br />
              <Row>
                <Col sm="4" className="text-center">
                  <img src={entrepreneurs} width="40%" className="img-fluid" />
                  <br />
                  <br />
                  <h5>Social Ventures</h5>
                  <p>You ran a social venture that failed or experienced failures in your current venture</p>
                </Col>
                <Col sm="4" className="text-center">
                  <img src={stage} width="40%" className="img-fluid" />
                  <br />
                  <br />
                  <h5>Willing to share</h5>
                  <p>You want to share your story of how you accepted failure itself and how you managed to turn it into an opportunity</p>
                </Col>
                <Col sm="4" className="text-center">
                  <img src={venue} width="40%" className="img-fluid" />
                  <br />
                  <br />
                  <h5>Rome</h5>
                  <p>You want to do it in one of the most failure-feared countries, Italy and in one of the most beautiful cities in the world, Rome</p>
                </Col>
              </Row>
            </Container>
          </Element>
        </div>
        <div
          className="section"
          style={{
            backgroundColor: `#f1f1f1`,
            // backgroundSize: 'cover',
          }}
        >
          <Element name="manifest">
            <Container>
              <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                  <Card>
                    <CardBlock>
                      <CardText>
                        “Pitch your failure” is an initiative organized by Mediterranean people for Mediterranean people, focusing on social entrepreneurship stories: Failure matters and stigmatizes us. It is in our everyday life, we experience it, but very few have the courage to talk about it and overcome it.
                      </CardText>
                      <CardText>
                        “Pitch your failure” is a night where 4 social entrepreneurs will have the chance to speak about an entrepreneurial failure they had overcome. Failure will be the common ground for all speakers. Not perfect stories, but true stories.
                      </CardText>
                      <CardText>
                        For social entrepreneurs, ventures are sometimes connected profoundly with their everyday and their lives in general. Their initiatives become their life goals. Thus, our goal is not only to cheer resolutions, but to hear and understand how difficulties occur. How do we accept failure itself and how do we manage to turn a negative outcome into an opportunity. We learn from real stories how to move forward.
                        “Pitch your failure” will encourage young and older people to bring change in their communities, without having the fear of failing. The audience will have the opportunity to listen and interact with social entrepreneurs living in the same region. Being a social entrepreneur is a challenge of its own, so the ‘fear’ of failure is always a threat, holding down several initiatives. But, when authentic reactions and genuine experience is shared, people feel stronger, are encouraged to achieve their goals and gain more strength to make a change on their own.
                      </CardText>
                      <Element name="apply">
                        <a href="https://goo.gl/forms/RE52Zs89F5zj4hKO2" className="btn btn-primary btn-block">Apply now</a>
                      </Element>
                    </CardBlock>
                  </Card>
                  <br />
                  <p className="text-center text-muted">
                    The online application is open until GMT Time.
                    <br />
                    Applicants are required to fill the application or submit a max two-minute video.
                    <br />
                    <small>Please note that late and non complete applications won’t be accepted.</small>
                  </p>
                </Col>
              </Row>
            </Container>
          </Element>
        </div>
      </div>
    );
  }
}

export default App;