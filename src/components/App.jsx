import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import FontAwesome from 'react-fontawesome';
import firebase from 'firebase';
import Loader from '@uidu/loader';

import PYFNavbar from './Navbar';

import Supporters from './Supporters';
import Team from './Team';
import Event from './events/show';

import logo from '../assets/images/logo.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCHOihMbAZKbEqzfjzh-s8y72aHKQDPeM8',
      authDomain: 'pitchyourfailure-1494925569209.firebaseapp.com',
      databaseURL: 'https://pitchyourfailure-1494925569209.firebaseio.com',
      projectId: 'pitchyourfailure-1494925569209',
      storageBucket: '',
      messagingSenderId: '597126361668',
    };
    firebase.initializeApp(config);
    this.database = firebase.database();
    this.state = {
      events: null,
      supporters: null,
      speakers: null,
      isModalOpen: false,
      loaded: false,
    };
  }

  componentDidMount() {
    this.database
      .ref('/')
      .once('value')
      .then(snapshot => {
        this.setState({
          ...snapshot.val(),
          loaded: true,
        });
      });
  }

  toggleModal(e) {
    e.preventDefault();
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    if (!this.state.loaded) {
      return (
        <div
          className="w-100 d-flex align-items-center justify-content-center flex-column"
          style={{ height: '100vh' }}
        >
          <div>
            <img
              src={logo}
              className="mb-4"
              width={64}
              alt="Pitch your Failure"
            />
            <Loader name="folding-cube" color="#0d7cda" />
          </div>
        </div>
      );
    }

    return (
      <Router>
        <div className="App">
          <PYFNavbar />
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
                    <Container className="text-center">
                      <h1 className="display-2">Pitch your failure</h1>
                      <h2 className="display-4 mb-4">
                        <s>Perfect stories</s> True stories<br />of{' '}
                        <i>failed</i> social ventures
                      </h2>
                      <p className="lead mb-0">
                        <a
                          className="btn btn-primary btn-lg"
                          href="https://www.eventbrite.com/e/pitch-your-failure-night-tickets-34605388649"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Signup for the event
                        </a>
                      </p>
                    </Container>
                  </div>
                  <Element name="why" className="section">
                    <Container>
                      <Row>
                        <Col sm="6">
                          <h3>Who's for</h3>
                          <h5>
                            Only for wannabe social entrepreneurs who{' '}
                            <b>
                              hesitate to start the journey because of fear of
                              failure
                            </b>
                          </h5>
                          <p className="lead">
                            You watched the video of Jack Ma talking about how
                            he failed 10 times to join Harvard, you heard the
                            story of Thomas Edison who made 1,000 unsuccessful
                            attempts at inventing the light bulb but still you
                            think this only happens for genius people?
                          </p>
                          <p className="lead">
                            Pitch your failure nights will prove you wrong.
                          </p>
                        </Col>
                        <Col sm="6">
                          <h3>Who speaks</h3>
                          <h5>
                            Social entrepreneurs who{' '}
                            <b>
                              terribly failed at their venture, that are so
                              gorgeous to share their story
                            </b>
                          </h5>
                          <p className="lead">
                            The speakers are entrepreneurs with a project,
                            initiative, or company that did not go as planned,
                            but who were able to stand back up again, learn from
                            the experience, and continue on their journey. As
                            they realised that failure is essential to success,
                            they hope to inspire others to overcome the fear of
                            failure by sharing their own mistakes.
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </Element>
                  <Element name="events" className="section">
                    <Container>
                      <h3 className="text-center">Events</h3>
                      <br />
                      <br />
                      <div className="card-deck">
                        {this.state.events &&
                          Object.keys(this.state.events).map(key => {
                            const event = this.state.events[key];
                            return (
                              <a className="card" href={`events/${key}`}>
                                <img
                                  className="card-img-top"
                                  src={event.cover}
                                  alt={event.name}
                                />
                                <div className="card-body">
                                  <h5 className="card-title">{event.name}</h5>
                                  <p className="card-text">
                                    {event.date} - {event.time}
                                    <br />
                                    {event.venue.name}
                                  </p>
                                  <button className="btn btn-primary">
                                    Go somewhere
                                  </button>
                                </div>
                              </a>
                            );
                          })}
                      </div>
                      <br />
                      <br />
                    </Container>
                  </Element>
                  <Team className="section inverse" />
                  <Supporters
                    className="section"
                    supporters={
                      this.state.supporters
                        ? ['uidu', 'cmx', 'ashoka'].map(
                            key => this.state.supporters[key],
                          )
                        : []
                    }
                  />
                </div>
              )}
            />
            <Route
              path="/events/:event"
              exact
              render={routeProps => (
                <Event
                  {...this.state}
                  event={
                    this.state.events &&
                    this.state.events[routeProps.match.params.event]
                  }
                />
              )}
            />
          </Switch>
          <div className="inverse">
            <Container style={{ paddingTop: 32, paddingBottom: 32 }}>
              <p className="m-b-0">
                &copy; Made with <FontAwesome name="heart" /> by uidu
                <span className="pull-right">
                  <a href="mailto:pitchyourfailure@gmail.com">Contact us</a>
                </span>
              </p>
            </Container>
          </div>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
              PitchYourFailure Manifest
            </ModalHeader>
            <ModalBody>
              <p>
                “Pitch your failure” is an initiative organized by Mediterranean
                people for Mediterranean people, focusing on social
                entrepreneurship stories: Failure matters and stigmatizes us. It
                is in our everyday life, we experience it, but very few have the
                courage to talk about it and overcome it.
              </p>
              <p>
                “Pitch your failure” is a night where 4 social entrepreneurs
                will have the chance to speak about an entrepreneurial failure
                they had overcome. Failure will be the common ground for all
                speakers. Not perfect stories, but true stories.
              </p>
              <p>
                For social entrepreneurs, ventures are sometimes connected
                profoundly with their everyday and their lives in general. Their
                initiatives become their life goals. Thus, our goal is not only
                to cheer resolutions, but to hear and understand how
                difficulties occur. How do we accept failure itself and how do
                we manage to turn a negative outcome into an opportunity. We
                learn from real stories how to move forward.
              </p>
              <p>
                “Pitch your failure” will encourage young and older people to
                bring change in their communities, without having the fear of
                failing. The audience will have the opportunity to listen and
                interact with social entrepreneurs living in the same region.
                Being a social entrepreneur is a challenge of its own, so the
                ‘fear’ of failure is always a threat, holding down several
                initiatives. But, when authentic reactions and genuine
                experience is shared, people feel stronger, are encouraged to
                achieve their goals and gain more strength to make a change on
                their own.
              </p>
            </ModalBody>
            <ModalFooter>
              <a
                href="https://goo.gl/forms/RE52Zs89F5zj4hKO2"
                className="btn btn-primary bnt-lg btn-block"
              >
                Apply now
              </a>
            </ModalFooter>
          </Modal>
        </div>
      </Router>
    );
  }
}
