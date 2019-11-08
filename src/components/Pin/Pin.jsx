import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Pin.css";

const Pin = props => {
  const [fallen, updateFallen] = useState(false);

  const handleClick = () => {
    updateFallen(!fallen);
    props.onPinStatusUpdate(props.number, fallen);
  };

  return (
    <div className={`Pin${fallen ? " Pin--fallen" : ""}`} onClick={handleClick}>
      {props.number}
    </div>
  );
};

Pin.propTypes = {
  number: PropTypes.number
};

export default Pin;
