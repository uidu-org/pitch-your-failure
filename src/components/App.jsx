import React, { Component } from 'react';
import moment from 'moment';
import { Element } from 'react-scroll';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

import FontAwesome from 'react-fontawesome';
import firebase from 'firebase';
import Loader from '@uidu/loader';

import PYFNavbar from './Navbar';

import Supporters from './Supporters';
import Team from './Team';
import Event from './events/show';

import logo from '../assets/images/logo.png';

import { OurLink, ScrollToTop } from '../utils/link';

export default class App extends Component {
  constructor(props) {
    super(props);
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
      team: null,
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
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <div className="App">
            <PYFNavbar />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <div className="hero-with-video">
                      <Container className="text-center">
                        <h1 className="display-2">Pitch your failure</h1>
                        <h2 className="display-4 mb-4">
                          <s>Perfect stories</s> True stories<br />of{' '}
                          <i>failed</i> social ventures
                        </h2>
                        <p className="lead mb-0">
                          <OurLink
                            className="btn btn-primary btn-lg"
                            offset={0}
                            to="events"
                            smooth
                          >
                            Browse next events
                          </OurLink>
                        </p>
                      </Container>
                    </div>
                    <Element name="manifest" className="section">
                      <Container>
                        <Row>
                          <Col sm="6">
                            <h3>Who's it for</h3>
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
                              but who were able to stand back up again, learn
                              from the experience, and continue on their
                              journey. As they realised that failure is
                              essential to success, they hope to inspire others
                              to overcome the fear of failure by sharing their
                              own mistakes.
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
                            Object.keys(this.state.events)
                              .sort((a, b) => {
                                const aDate = moment(
                                  this.state.events[a].date,
                                  'ddd MMMM DD, YYYY',
                                ).toDate();
                                const bDate = moment(
                                  this.state.events[b].date,
                                  'ddd MMMM DD, YYYY',
                                ).toDate();
                                return bDate - aDate;
                              })
                              .map(key => {
                                const event = this.state.events[key];
                                return (
                                  <Link
                                    className="card"
                                    key={key}
                                    to={`/events/${key}`}
                                  >
                                    <img
                                      className="card-img-top"
                                      src={event.cover}
                                      alt={event.name}
                                    />
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        {event.name}
                                      </h5>
                                      <p className="card-text">
                                        {event.date} - {event.time}
                                        <br />
                                        {event.venue.name}
                                      </p>
                                      <button className="btn btn-primary">
                                        {event.status === 'finished'
                                          ? 'See how it went'
                                          : event.steps.indexOf('call') >= 0
                                            ? 'Apply now as a speaker'
                                            : 'See more'}
                                      </button>
                                    </div>
                                  </Link>
                                );
                              })}
                        </div>
                        <br />
                        <br />
                      </Container>
                    </Element>
                    <Team team={this.state.team} className="section inverse" />
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
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}
