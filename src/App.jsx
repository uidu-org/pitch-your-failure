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
  NavLink,
  Button,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView,
} from 'react-google-maps';
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

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={12}
    defaultCenter={{ lat: 41.882076, lng: 12.467271 }}
    options={{
      scrollwheel: false
    }}
    onClick={props.onMapClick}
  >
    <OverlayView
      position={{
        lat: 41.882076,
        lng: 12.467271,
      }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div style={{
        background: `white`,
        border: `1px solid #ccc`,
        padding: 15,
      }}>
        <h4>TIM #Wcap Accelerator</h4>
        <p className="lead">Via Aurelio Saliceti, 10, Rome, Italy</p>
      </div>
    </OverlayView>
    <Marker
      position={{
        lat: 41.882076,
        lng: 12.467271,
      }}
      key="Taiwan"
      defaultAnimation="2"
    />
  </GoogleMap>
));

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isOpen: false,
      isModalOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Navbar toggleable light>
            <NavbarToggler type="inverse" right onClick={this.toggle} />
            <NavbarBrand href="#">
              PitchYourFailure
            </NavbarBrand>
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
        <div style={{ height: 300 }}>
          <GettingStartedGoogleMap
            containerElement={
              <div style={{ height: 300 }} />
            }
            mapElement={
              <div style={{ height: 300 }} />
            }
            // onMapLoad={_.noop}
            // onMapClick={_.noop}
            // markers={markers}
            // onMarkerRightClick={_.noop}
          />
        </div>
        <div className="inverse">
          <Container style={{ paddingTop: 32, paddingBottom: 32}}>
            <p className="m-b-0">
              &copy; Made with <FontAwesome name="heart" /> by uidu
              <span className="pull-right">
                <a href="#" onClick={this.toggleModal}>Read the full manifest</a>
                {' '}{' | '}{' '}
                <a href="mailto:pitchyourfailure@gmail.com">Contact us</a>
              </span>
            </p>
          </Container>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>PitchYourFailure Manifest</ModalHeader>
          <ModalBody>
            <p>“Pitch your failure” is an initiative organized by Mediterranean people for Mediterranean people, focusing on social entrepreneurship stories: Failure matters and stigmatizes us. It is in our everyday life, we experience it, but very few have the courage to talk about it and overcome it.</p>
            <p>“Pitch your failure” is a night where 4 social entrepreneurs will have the chance to speak about an entrepreneurial failure they had overcome. Failure will be the common ground for all speakers. Not perfect stories, but true stories.</p>
            <p>For social entrepreneurs, ventures are sometimes connected profoundly with their everyday and their lives in general. Their initiatives become their life goals. Thus, our goal is not only to cheer resolutions, but to hear and understand how difficulties occur. How do we accept failure itself and how do we manage to turn a negative outcome into an opportunity. We learn from real stories how to move forward.</p>
            <p>“Pitch your failure” will encourage young and older people to bring change in their communities, without having the fear of failing. The audience will have the opportunity to listen and interact with social entrepreneurs living in the same region. Being a social entrepreneur is a challenge of its own, so the ‘fear’ of failure is always a threat, holding down several initiatives. But, when authentic reactions and genuine experience is shared, people feel stronger, are encouraged to achieve their goals and gain more strength to make a change on their own.</p>
          </ModalBody>
          <ModalFooter>
            <a href="https://goo.gl/forms/RE52Zs89F5zj4hKO2" className="btn btn-primary bnt-lg btn-block">Apply now</a>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
