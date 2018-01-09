import React, { Component } from 'react';
import Lightbox from 'react-images';
import { Element } from 'react-scroll';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

export default class EventReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };
  }

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };

  render() {
    const { photos, className } = this.props;
    return (
      <Element name="photos" className={className}>
        <Container>
          <h3 className="text-center">Photos</h3>
          <br />
          <br />
          <br />
          <div className="card-columns">
            {photos.map((obj, i) => (
              <a
                href={obj.src}
                key={obj.src}
                // className={css(classes.thumbnail, classes[obj.orientation])}
                // key={i}
                className="card"
                onClick={e => this.openLightbox(i, e)}
              >
                <img className="card-img-top" src={obj.src} />
              </a>
            ))}
          </div>
          <Lightbox
            images={photos}
            isOpen={this.state.lightboxIsOpen}
            currentImage={this.state.currentImage}
            // onClickPrev={this.gotoPrevious}
            // onClickNext={this.gotoNext}
            onClose={this.closeLightbox}
          />
        </Container>
      </Element>
    );
  }
}
