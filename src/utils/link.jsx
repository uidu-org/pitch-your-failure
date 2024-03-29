import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ScrollLink } from 'react-scroll';

export const OurLink = ScrollLink(props => (
  <a href="#" {...props}>
    {props.children}
  </a>
));

class ScrollToTopContainer extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export const ScrollToTop = withRouter(ScrollToTopContainer);
