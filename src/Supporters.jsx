import React from 'react';
import {
  Element,
} from 'react-scroll';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import './App.scss';
import venue from './003-coliseum.png';
import cmx from './cmx.png';
import timwcap from './timwcap.jpg';
import ashoka from './ashoka.png';
import uidu from './uidu.png';

const imgStyle = {
  maxWidth: '100%',
  height: 145,
};

const Supporters = ({ className }) => (
  <Element name="supporters" className={className}>
    <Container>
      <h3 className="text-center">Supported by</h3>
      <br />
      <br />
      <br />
      <Row>
        <Col sm="3">
          <div className="text-center">
            <img src={timwcap} style={imgStyle} />
          </div>
          <br />
          <br />
          <p>
            <b>TIM #Wcap Accelerator</b>
            <br />
            TIM #Wcap is TIM’s corporate accelerator that selects, finances, and accelerates digital startups. It is dedicated to innovation and includes more than 4000 square meters of accelerator space in Milan, Bologna, Rome and Catania.
          </p>
          <a href="http://www.wcap.tim.it/en">http://www.wcap.tim.it/en</a>
        </Col>
        <Col sm="3">
          <div className="text-center">
            <img src={cmx} style={imgStyle} />
          </div>
          <br />
          <br />
          <p>
            <b>ChangeMakersXchange</b>
            <br />
            The ChangemakerXchange is a global collaboration platform for young social innovators. It brings together some of the world’s top social innovators, who have dedicated their lives to solving a social problem and have the skills and mindset to collaborate for collective impact. The said platform is supported by R. Bosch Stiftung and Ashoka.
          </p>
          <a href="http://changemakerxchange.com/">http://changemakerxchange.com/</a>
        </Col>
        <Col sm="3">
          <div className="text-center">
            <img src={ashoka} style={imgStyle} />
          </div>
          <br />
          <br />
          <p>
            <b>Ashoka</b>
            <br />
            A global organization that identifies and invests in leading social entrepreneurs -- individuals with innovative and practical ideas for solving social problems.
          </p>
          <a href="https://www.ashoka.org/">https://www.ashoka.org/ </a>
        </Col>
        <Col sm="3">
          <div className="text-center">
            <img alt="uidu" src={uidu} style={imgStyle} />
          </div>
          <br />
          <br />
          <p>
            <b>uidu</b>
            <br />
            uidu is at nonprofit’s heart. It’s a platform that enables nonprofit organizations to manage all their daily activities in one integrated product. (Fundraising, Outreach, Recruiting, Project Management, CRM)
          </p>
          <a href="https://uidu.org">https://uidu.org</a>
        </Col>
      </Row>
    </Container>
  </Element>
);

export default Supporters;