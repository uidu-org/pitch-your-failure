import React from 'react';
import { Element } from 'react-scroll';

import { Container } from 'reactstrap';

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
            <div className="text-center mb-3">
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
