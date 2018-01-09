import React from 'react';
import { ScrollLink } from 'react-scroll';

export const OurLink = ScrollLink(props => (
  <a href="#" {...props}>
    {props.children}
  </a>
));
