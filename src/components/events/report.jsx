import React, { Component } from 'react';
import Lightbox from 'react-images';
import { Element } from 'react-scroll';
import { Container } from 'reactstrap';

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
    const { photos, className, blog } = this.props;
    return (
      <Element name="photos" className={className}>
        <Container>
          <h3 className="text-center">{blog ? blog.title : 'Photos'}</h3>
          {blog && (
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <p className="lead text-center">
                  {blog.excerpt}{' '}
                  <a href={blog.link} target="_blank">
                    [Read the full blog post]
                  </a>
                </p>
              </div>
            </div>
          )}
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
