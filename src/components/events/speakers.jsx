import React from 'react';
import { Element } from 'react-scroll';

import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

export default function Speakers({ speakers, className }) {
  return (
    <Element name="speakers" className={className}>
      <Container>
        <h3 className="text-center">Speakers</h3>
        <br />
        <br />
        <br />
        <Row>
          {speakers.map(speaker => (
            <Col sm="6" xs="6" key={speaker.fullName}>
              <Row>
                <Col sm="12" md="6">
                  <img
                    alt={speaker.fullName}
                    src={speaker.avatar}
                    className="img-fluid rounded mb-4 w-100"
                  />
                </Col>
              </Row>
              <p>
                <b>{speaker.fullName}</b>
              </p>
              <blockquote
                className="blockquote mb-3"
                dangerouslySetInnerHTML={{ __html: speaker.quote }}
              />
              <p>{speaker.bio}</p>
              <Nav className="d-inline-flex">
                {speaker.links &&
                  Object.keys(speaker.links).map(link => (
                    <NavItem key={`${speaker.fullName}-${link}`}>
                      <NavLink href={speaker.links[link]}>
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
}
