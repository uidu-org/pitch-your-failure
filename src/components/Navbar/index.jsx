import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom';

import { Container, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { OurLink } from '../../utils/link';

import logo from '../../assets/images/logo.png';

export default class PYFNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    this.scrollToHash();
  }

  componentDidUpdate() {
    this.scrollToHash();
  }

  scrollToHash = () => {
    if (window.location.hash) {
      scroller.scrollTo(window.location.hash.substring(1), {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    }
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Container>
          <NavbarToggler type="inverse" right onClick={this.toggle} />
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              className="d-inline-block align-top"
              width={64}
              alt="Pitch your Failure"
            />
          </Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {window.location.pathname === '/' ? (
                  <OurLink className="nav-link" offset={0} to="events" smooth>
                    Events
                  </OurLink>
                ) : (
                  <Link to="/#events" className="nav-link">
                    Events
                  </Link>
                )}
              </NavItem>
              <NavItem>
                {window.location.pathname === '/' ? (
                  <OurLink className="nav-link" offset={0} to="manifest" smooth>
                    Manifest
                  </OurLink>
                ) : (
                  <Link to="/#manifest" className="nav-link">
                    Manifest
                  </Link>
                )}
              </NavItem>
              <NavItem>
                {window.location.pathname === '/' ? (
                  <OurLink className="nav-link" offset={0} to="team" smooth>
                    Team
                  </OurLink>
                ) : (
                  <Link to="/#team" className="nav-link">
                    Team
                  </Link>
                )}
              </NavItem>
              <NavItem>
                {window.location.pathname === '/' ? (
                  <OurLink
                    className="nav-link"
                    offset={0}
                    to="supporters"
                    smooth
                  >
                    Supporters
                  </OurLink>
                ) : (
                  <Link to="/#supporters" className="nav-link">
                    Supporters
                  </Link>
                )}
              </NavItem>
            </Nav>
            <a
              href="mailto:pitchyourfailure@gmail.com"
              className="btn btn-navbar btn-outline btn-outline-primary ml-lg-3"
            >
              Host an event
            </a>
          </Collapse>
        </Container>
      </nav>
    );
  }
}
