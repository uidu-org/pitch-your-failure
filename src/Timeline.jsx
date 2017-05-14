import React from 'react';
import {
  Element,
} from 'react-scroll';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import './App.scss';
import './Timeline.scss';

function Timeline({ className }) {
  return (
    <Element name="timeline" className={className}>
      <Container className="text-center">
        <h3>Timeline</h3>
        <br />
        <section className="timeline">
          <ol>
            <li>
              <div>
                <time>9<sup>th</sup> June</time>
                Applications closed
              </div>
            </li>
            <li>
              <div>
                <time>12<sup>th</sup> June</time>
                Pre-selected participants announced
              </div>
            </li>
            <li>
              <div>
                <time>14-16<sup>th</sup> June</time>
                Interviews
              </div>
            </li>
            <li>
              <div>
                <time>19<sup>th</sup> June</time>
                Final speakers announced
              </div>
            </li>
            <li>
              <div>
                <time>5<sup>th</sup> October</time>
                Pitch your Failure
              </div>
            </li>
          </ol>
        </section>
        <br />
        <br />
        <Row>
          <Col sm={{ size: 4, offset: 4 }}>
            <a href="https://goo.gl/forms/RE52Zs89F5zj4hKO2" className="btn btn-primary bnt-lg btn-block">Apply now</a>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default Timeline;
