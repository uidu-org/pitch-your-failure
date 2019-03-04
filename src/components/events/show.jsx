import React from 'react';
import { Element } from 'react-scroll';
import { Container, Nav, NavItem } from 'reactstrap';

import Loader from '@uidu/loader';

import { GettingStartedGoogleMap } from '../../utils/map';
import { OurLink } from '../../utils/link';

import Call from './call';
import Supporters from './supporters';
import Venue from './venue';
import Speakers from './speakers';
import Report from './report';
import Team from './team';

import './show.scss';

export default function Event({
  event,
  team,
  speakers,
  supporters,
  ...otherProps
}) {
  if (!event) {
    return (
      <div className="section inverse">
        <Loader loaded={!!event} />
      </div>
    );
  }
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${event.cover})`,
        }}
        className="hero-with-bg"
      >
        <Element name="event-root">
          <Container>
            {event.status === 'finished' && (
              <div className="alert alert-warning">
                Event was great! Don't miss the{' '}
                <a href="/#events" className="alert-link">
                  next ones
                </a>!
              </div>
            )}
            <h2 className="display-4">
              <s>Perfect stories</s> True stories<br />of <i>failed</i> social
              ventures in <i className="text-primary">{event.name}</i>
            </h2>
            <br />
            <h5>
              {event.date}
              <br />
              {event.time}
              <br />
              <br />
              {event.venue.name}
              <br />
              {event.venue.address}
            </h5>
            <br />
            <p className="lead mb-0">
              {event.status === 'finished' ? (
                <OurLink
                  className="btn btn-primary btn-lg"
                  offset={-64}
                  to="photos"
                  smooth
                >
                  See how it went
                </OurLink>
              ) : event.steps.indexOf('call') >= 0 ? (
                <OurLink
                  className="btn btn-primary btn-lg"
                  offset={-64}
                  to="application"
                  smooth
                >
                  Apply now as a speaker
                </OurLink>
              ) : (
                <a
                  className="btn btn-primary btn-lg"
                  href={event.ticket}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Signup for the event
                </a>
              )}
            </p>
            {event.coverCredits && (
              <a
                href={event.coverCreditsUrl}
                target="_blank"
                className="small position-absolute text-white"
                style={{ bottom: '1rem', right: '1rem' }}
              >
                Cover credits: {event.coverCredits}
              </a>
            )}
          </Container>
        </Element>
      </div>
      <div className="bg-primary py-3 sticky-top">
        <Container>
          <Nav className="">
            <NavItem>
              <OurLink
                className="nav-link disabled"
                offset={-64}
                to="event-root"
                style={{ color: '#b4bec7' }}
                spy
                smooth
              >
                {event.name}@{event.venue.name}
              </OurLink>
            </NavItem>
            {event.steps.indexOf('call') >= 0 && (
              <NavItem>
                <OurLink
                  className="nav-link text-white"
                  offset={-64}
                  to="application"
                  spy
                  smooth
                >
                  Apply now
                </OurLink>
              </NavItem>
            )}
            {event.steps.indexOf('call') >= 0 && (
              <NavItem>
                <OurLink
                  className="nav-link text-white"
                  offset={-64}
                  to="timeline"
                  spy
                  smooth
                >
                  Application timeline
                </OurLink>
              </NavItem>
            )}
            {event.steps.indexOf('photos') >= 0 && (
              <NavItem>
                <OurLink
                  className="nav-link text-white"
                  offset={-64}
                  to="photos"
                  spy
                  smooth
                >
                  {event.blog ? 'Story' : 'Photos'}
                </OurLink>
              </NavItem>
            )}
            {event.steps.indexOf('speakers') >= 0 && (
              <NavItem>
                <OurLink
                  className="nav-link text-white"
                  offset={-64}
                  to="speakers"
                  spy
                  smooth
                >
                  Speakers
                </OurLink>
              </NavItem>
            )}
            {event.steps.indexOf('venue') >= 0 && (
              <NavItem>
                <OurLink
                  className="nav-link text-white"
                  offset={-64}
                  to="venue"
                  spy
                  smooth
                >
                  Venue
                </OurLink>
              </NavItem>
            )}
            {event.steps.indexOf('team') >= 0 && (
              <NavItem>
                <OurLink
                  className="nav-link text-white"
                  offset={-64}
                  to="team"
                  spy
                  smooth
                >
                  Team
                </OurLink>
              </NavItem>
            )}
            <NavItem>
              <OurLink
                className="nav-link text-white"
                offset={-64}
                to="supporters"
                spy
                smooth
              >
                Supporters
              </OurLink>
            </NavItem>
          </Nav>
        </Container>
      </div>
      {event.steps.indexOf('photos') >= 0 && (
        <Report className="section" blog={event.blog} photos={event.photos} />
      )}
      {event.steps.indexOf('call') >= 0 && <Call event={event} />}
      {event.steps.indexOf('speakers') >= 0 && (
        <Speakers
          className="section"
          speakers={
            event.speakers ? event.speakers.map(key => speakers[key]) : []
          }
        />
      )}
      {event.steps.indexOf('venue') >= 0 && (
        <Venue className="section inverse" event={event} />
      )}
      {event.steps.indexOf('venue') >= 0 && (
        <div style={{ height: 300 }}>
          <GettingStartedGoogleMap
            containerElement={<div style={{ height: 300 }} />}
            mapElement={<div style={{ height: 300 }} />}
            lat={event.venue.lat}
            lng={event.venue.lng}
            // onMapLoad={_.noop}
            // onMapClick={_.noop}
            // markers={markers}
            // onMarkerRightClick={_.noop}
          />
        </div>
      )}
      {event.steps.indexOf('team') >= 0 && (
        <Team
          className="section"
          team={event.team ? event.team.map(key => team[key]) : []}
        />
      )}
      <Supporters
        className="section"
        supporters={
          event.supporters ? event.supporters.map(key => supporters[key]) : []
        }
      />
    </div>
  );
}
