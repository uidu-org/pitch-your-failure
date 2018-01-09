import React, { Component } from 'react';
import { Element } from 'react-scroll';

import { Container, Row, Col } from 'reactstrap';

export default class Manifest extends Component {
  render() {
    const { call } = this.props;
    return (
      <Element
        name="manifest"
        style={{
          backgroundImage: `url(${call.city.cover})`,
        }}
        className="manifest text-center"
      >
        <Container>
          <div className="manifest-quote">
            <p className="lead quote">
              Fear of failure is always a threat, holding down several
              initiatives.
              <br />
              But, when authentic reactions and genuine experience is shared,
              people feel stronger.
            </p>
            <br />
            <Row className="justify-content-center">
              <Col sm="4">
                <a
                  href="https://goo.gl/forms/RE52Zs89F5zj4hKO2"
                  className="btn btn-primary bnt-lg btn-block"
                >
                  Apply now and share your story
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </Element>
    );
  }
}

// <br />
// <p>
//   <small>or <Button size="sm" color="secondary" onClick={this.toggle}>read the full manifest</Button></small>
//   <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//     <ModalHeader toggle={this.toggle}>PitchYourFailure Manifest</ModalHeader>
//     <ModalBody>
//       <p>“Pitch your failure” is an initiative organized by Mediterranean people for Mediterranean people, focusing on social entrepreneurship stories: Failure matters and stigmatizes us. It is in our everyday life, we experience it, but very few have the courage to talk about it and overcome it.</p>
//       <p>“Pitch your failure” is a night where 4 social entrepreneurs will have the chance to speak about an entrepreneurial failure they had overcome. Failure will be the common ground for all speakers. Not perfect stories, but true stories.</p>
//       <p>For social entrepreneurs, ventures are sometimes connected profoundly with their everyday and their lives in general. Their initiatives become their life goals. Thus, our goal is not only to cheer resolutions, but to hear and understand how difficulties occur. How do we accept failure itself and how do we manage to turn a negative outcome into an opportunity. We learn from real stories how to move forward.</p>
//       <p>“Pitch your failure” will encourage young and older people to bring change in their communities, without having the fear of failing. The audience will have the opportunity to listen and interact with social entrepreneurs living in the same region. Being a social entrepreneur is a challenge of its own, so the ‘fear’ of failure is always a threat, holding down several initiatives. But, when authentic reactions and genuine experience is shared, people feel stronger, are encouraged to achieve their goals and gain more strength to make a change on their own.</p>
//     </ModalBody>
//     <ModalFooter>
//       <a href="https://goo.gl/forms/RE52Zs89F5zj4hKO2" className="btn btn-primary bnt-lg btn-block">Apply now</a>
//     </ModalFooter>
//   </Modal>
// </p>
// // <Row>
// //   <Col sm={{ size: 6, offset: 3 }}>
// //     <Card>
// //       <CardBlock>
// //         <CardText>
// //
// //         </CardText>
// //         <CardText>
// //
// //         </CardText>
// //         <CardText>
// //           For social entrepreneurs, ventures are sometimes connected profoundly with their everyday and their lives in general. Their initiatives become their life goals. Thus, our goal is not only to cheer resolutions, but to hear and understand how difficulties occur. How do we accept failure itself and how do we manage to turn a negative outcome into an opportunity. We learn from real stories how to move forward.
// //           “Pitch your failure” will encourage young and older people to bring change in their communities, without having the fear of failing. The audience will have the opportunity to listen and interact with social entrepreneurs living in the same region. Being a social entrepreneur is a challenge of its own, so the ‘fear’ of failure is always a threat, holding down several initiatives. But, when authentic reactions and genuine experience is shared, people feel stronger, are encouraged to achieve their goals and gain more strength to make a change on their own.
// //         </CardText>
// //         <Element name="apply">
// //           <a href="https://goo.gl/forms/RE52Zs89F5zj4hKO2" className="btn btn-primary btn-block">Apply now</a>
// //         </Element>
// //       </CardBlock>
// //     </Card>
// //     <br />
// //     <p className="text-center text-muted">
// //       The online application is open until GMT Time.
// //       <br />
// //       Applicants are required to fill the application or submit a max two-minute video.
// //       <br />
// //       <small>Please note that late and non complete applications won’t be accepted.</small>
// //     </p>
// //   </Col>
// // </Row>
