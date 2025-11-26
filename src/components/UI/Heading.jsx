import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const createHeading =
  (Tag, extraClass = "") =>
  (data, className) =>
    <Tag className={cn(extraClass, className)}>{data}</Tag>;

const headingTypes = {
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  h4: createHeading("h4"),
  h5: createHeading("h5"),
  h6: createHeading("h6"),
  superSmall: createHeading("p", "super-small-heading"),
};

const Heading = ({ type, title, className }) => {
  const renderHeading = headingTypes[type];
  if (!renderHeading) return null;
  return renderHeading(title, className);
};

Heading.propTypes = {
  type: PropTypes.oneOf(Object.keys(headingTypes)).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Heading;