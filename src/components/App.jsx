import React, { Component } from 'react';
import {
  Element,
  Helpers,
} from 'react-scroll';


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

import PYFNavbar from './Navbar';
import CallForProposals from './CallForProposals';

import Supporters from './Supporters';
import Team from './Team';

import rome from '../assets/images/skyline.png';

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
                  <Team className="section inverse" />
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
