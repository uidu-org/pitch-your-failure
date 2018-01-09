import React from 'react';
import { Element } from 'react-scroll';

import { Container, Row, Col } from 'reactstrap';

import cmx from '../../assets/images/cmx.png';
import timwcap from '../../assets/images/timwcap.png';
import ashoka from '../../assets/images/ashoka.png';
import uidu from '../../assets/images/uidu.png';
import romeBusinessSchool from '../../assets/images/logo-business-school.png';

const imgStyle = {
  // maxWidth: '100%',
  // height: 145,
};

const Supporters = ({ supporters, className }) => (
  <Element name="supporters" className={className}>
    <Container>
      <h3 className="text-center">Supported by</h3>
      <br />
      <br />
      <br />
      <div className="card-columns">
        {supporters.map(supporter => (
          <div className="card card-body" key={supporter.name}>
            <div className="text-center mb-3" style={imgStyle}>
              <img
                className={supporter.logoClassName}
                alt={supporter.name}
                src={supporter.logo}
              />
            </div>
            <p>
              <b>{supporter.name}</b>
              <br />
              {supporter.bio}
            </p>
            <a className="card-link" href={supporter.link}>
              {supporter.link}
            </a>
          </div>
        ))}
      </div>
    </Container>
  </Element>
);

export default Supporters;
