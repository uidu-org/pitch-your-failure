import React, { Component } from 'react';
import { ScrollLink, scroller } from 'react-scroll';

import {
  Container,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
    if (window.location.hash) {
      console.log(window.location.hash.substring(1));
      scroller.scrollTo(window.location.hash.substring(1), {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    }
  }

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
          <NavbarBrand href="/">
            <img
              src={logo}
              className="d-inline-block align-top"
              width={64}
              alt="Pitch your Failure"
            />
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {window.location.pathname === '/' ? (
                  <OurLink className="nav-link" offset={-64} to="events" smooth>
                    Events
                  </OurLink>
                ) : (
                  <a href="/#events" className="nav-link">
                    Events
                  </a>
                )}
              </NavItem>
              <NavItem>
                {window.location.pathname === '/' ? (
                  <OurLink className="nav-link" offset={-64} to="why" smooth>
                    Manifest
                  </OurLink>
                ) : (
                  <a href="/#manifest" className="nav-link">
                    Manifest
                  </a>
                )}
              </NavItem>
              <NavItem>
                {window.location.pathname === '/' ? (
                  <OurLink
                    className="nav-link"
                    offset={-64}
                    to="supporters"
                    smooth
                  >
                    Supporters
                  </OurLink>
                ) : (
                  <a href="/#supporters" className="nav-link">
                    Supporters
                  </a>
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
