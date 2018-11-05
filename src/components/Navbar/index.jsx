import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom';

import {
  Container,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

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
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/pitchyourfailure/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center"
                  style={{ color: '#3B5998' }}
                >
                  <svg
                    fill="currentColor"
                    aria-labelledby="simpleicons-facebook-icon"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: 22, height: 22 }}
                  >
                    <title id="simpleicons-facebook-icon">Facebook icon</title>
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                  </svg>
                </NavLink>
              </NavItem>
            </Nav>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfLsHieBOG_aNQJPI7pY8-1N3cqjhmfzriiD0zdvN-gkZeshg/viewform"
              className="btn btn-navbar btn-outline btn-outline-primary ml-lg-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Host an event
            </a>
          </Collapse>
        </Container>
      </nav>
    );
  }
}
