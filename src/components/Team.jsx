import React from 'react';
import { Element } from 'react-scroll';

import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import andrea from '../assets/images/andrea.jpg';
import ahmed from '../assets/images/ahmed.jpg';
import violetta from '../assets/images/violetta.jpg';
import andreag from '../assets/images/andreag.jpg';

const Team = ({ team, className }) => (
  <Element name="team" className={className}>
    <Container className="text-center">
      <h3>Organized by</h3>
      <br />
      <p>
        We are an intercultural team living in different countries. We dedicate
        time and energy to create spaces for social entrepreneurs to share
        stories of failure in the hope to inspire others to let go of their
        fears and embark on a journey of service to people and planet.
      </p>
      <br />
      <br />
      <Row className="justify-content-center">
        {Object.keys(team)
          .reverse()
          .map(teamMemberKey => {
            const teamMember = team[teamMemberKey];
            return (
              <Col md="4" sm="6" xs="6">
                <img
                  alt={teamMember.name}
                  src={teamMember.avatar}
                  className="img-fluid rounded w-50"
                />
                <br />
                <br />
                <p>
                  <b>{teamMember.name}</b>
                  <br />
                  <span dangerouslySetInnerHTML={{ __html: teamMember.bio }} />
                </p>
                <Nav className="d-inline-flex">
                  {teamMember.links &&
                    Object.keys(teamMember.links).map(link => (
                      <NavItem key={`${teamMember.name}-${link}`}>
                        <NavLink href={teamMember.links[link]}>
                          <FontAwesome name={link} />
                        </NavLink>
                      </NavItem>
                    ))}
                </Nav>
                <br className="hidden-md-up" />
                <br className="hidden-md-up" />
              </Col>
            );
          })}
      </Row>
    </Container>
  </Element>
);

export default Team;
