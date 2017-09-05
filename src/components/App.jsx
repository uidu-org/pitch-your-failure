import React, { Component } from 'react';
import ReactDriveIn from 'react-drive-in';
import {
  Element,
  Helpers,
} from 'react-scroll';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView,
} from 'react-google-maps';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  Container,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import FontAwesome from 'react-fontawesome';

import PYFNavbar from './Navbar';
import CallForProposals from './CallForProposals';

import Supporters from './Supporters';
import Venue from './Venue';
import Speakers from './Speakers';

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

const OurLink = Helpers.Scroll(props =>
  <a href="#" {...props}>
    {props.children}
  </a>,
);

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <PYFNavbar />
          </Container>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <div
                    // style={{
                    //   backgroundImage: `url(${rome})`,
                    // }}
                    className="hero-with-video"
                  >
                    <ReactDriveIn
                      show="/videos/Erase-And-Rewind.mp4"
                      poster="/videos/Erase-And-Rewind.jpg"
                    />
                    <Container>
                      <Row>
                        <Col md="10">
                          <h1 className="display-2">Pitch your failure</h1>
                          <h2 className="display-4">
                            <s>Perfect stories</s> True stories<br />of <i>failed</i> social ventures
                          </h2>
                          <br />


                          <h5>
                            Thu, October 5, 2017
                            <br />
                            6:00 PM – 8:00 PM CEST
                            <br />
                            <br />
                            TIM #Wcap Accelerator
                            <br />
                            Via Aurelio Saliceti, 10, 00153 Roma
                          </h5>
                          <br />
                          <p className="lead">
                            <a
                              className="btn btn-primary btn-lg"
                              href="https://www.eventbrite.com/e/pitch-your-failure-night-tickets-34605388649"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Signup for the event
                            </a>
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <Element name="why" className="section inverse">
                    <Container>
                      <h5>You are a wannabe entrepreneur but you <b>still hesitate to start the journey because of fear of failure</b>?</h5>
                      <p className="lead">
                        You watched the video of Jack Ma talking about how he failed 10 times to join Harvard, you heard the story of Thomas Edison who made 1,000 unsuccessful attempts at inventing the light bulb but still you think this only happens for genius people?
                        <br />
                        Pitch your failure night in Rome in October 5th at 6 pm will prove you wrong...
                      </p>
                    </Container>
                  </Element>
                  <Speakers className="section" />
                  <Venue className="section inverse" />
                  <Supporters className="section" />
                </div>
              )}
            />
            <Route
              path="/call"
              exact
              render={() => (
                <CallForProposals />
              )}
            />
          </Switch>
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
                  <a href="#">Read the full manifest</a>
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
      </Router>
    );
  }
}

export default App;
