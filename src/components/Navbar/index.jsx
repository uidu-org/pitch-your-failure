import React, { Component } from 'react';
import {
  Helpers,
} from 'react-scroll';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import logo from '../../assets/images/logo.png';

const OurLink = Helpers.Scroll(props =>
  <a href="#" {...props}>
    {props.children}
  </a>,
);

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
        <NavbarToggler type="inverse" right onClick={this.toggle} />
        <NavbarBrand href="#">
          <img
            src={logo}
            className="d-inline-block align-top"
            width={64}
          />
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <OurLink
                className="nav-link"
                offset={-64}
                to="speakers"
                smooth
              >
                Speakers
              </OurLink>
            </NavItem>
            <NavItem>
              <OurLink
                className="nav-link"
                offset={-64}
                to="venue"
                smooth
              >
                Venue
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
              <a
                href="https://www.eventbrite.com/e/pitch-your-failure-night-tickets-34605388649"
                rel="noopener noreferrer"
                target="_blank"
                className="nav-link"
              >
                Signup for the event
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>
    );
  }
}
