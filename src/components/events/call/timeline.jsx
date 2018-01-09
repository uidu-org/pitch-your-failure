import React from 'react';
import { Element } from 'react-scroll';
import shortid from 'shortid';

import { Container, Row, Col } from 'reactstrap';
import './timeline.scss';

export default function Timeline({ event, className }) {
  const { timeline } = event.call;
  return (
    <Element name="timeline" className={className}>
      <Container className="text-center">
        <h3>Timeline</h3>
        <br />
        <section className="timeline">
          <ol>
            {timeline.map(time => (
              <li key={shortid.generate()}>
                <div>
                  <time dangerouslySetInnerHTML={{ __html: time.date }} />
                  {time.name}
                </div>
              </li>
            ))}
            <li>
              <div>
                <time>
                  9<sup>th</sup> June
                </time>
                Applications closed
              </div>
            </li>
            <li>
              <div>
                <time>
                  12<sup>th</sup> June
                </time>
                Pre-selected participants announced
              </div>
            </li>
            <li>
              <div>
                <time>
                  14-16<sup>th</sup> June
                </time>
                Interviews
              </div>
            </li>
            <li>
              <div>
                <time>
                  19<sup>th</sup> June
                </time>
                Final speakers announced
              </div>
            </li>
            <li>
              <div>
                <time>
                  5<sup>th</sup> October
                </time>
                Pitch your Failure @ TIM #Wcap Accelerator, Rome, Italy
              </div>
            </li>
          </ol>
        </section>
        <br />
        <br />
        <Row className="justify-content-center">
          <Col sm="4">
            <a
              href="https://goo.gl/forms/RE52Zs89F5zj4hKO2"
              className="btn btn-primary bnt-lg btn-block"
            >
              Apply now
            </a>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}
