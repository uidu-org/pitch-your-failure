import React from 'react';
import { Element } from 'react-scroll';

import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const Team = ({ team, className }) => (
  <Element name="team" className={className}>
    <Container className="text-center">
      <h3>Organized by</h3>
      <p>
        We are an intercultural team living in different countries. We dedicate
        time and energy to create spaces for social entrepreneurs to share
        stories of failure in the hope to inspire others to let go of their
        fears and embark on a journey of service to people and planet.{' '}
      </p>
      <br />
      <br />
      <br />
      <Row className="justify-content-center">
        {team.map(teamMember => (
          <Col md="3" sm="6" xs="6">
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
        ))}
      </Row>
    </Container>
  </Element>
);

export default Team;
