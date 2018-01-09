import React, { Component } from 'react';
import { ScrollLink } from 'react-scroll';

import {
  Container,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import logo from '../../assets/images/logo.png';

const OurLink = ScrollLink(props => (
  <a href="#" {...props}>
    {props.children}
  </a>
));

export default class PYFNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
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
                <OurLink className="nav-link" offset={-64} to="events" smooth>
                  Events
                </OurLink>
              </NavItem>
              <NavItem>
                <OurLink className="nav-link" offset={-64} to="why" smooth>
                  Manifest
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
            </Nav>
            <button className="btn btn-navbar btn-primary ml-lg-3">
              Host an event
            </button>
          </Collapse>
        </Container>
      </nav>
    );
  }
}
