import React from "react";
import ReactHtmlParser from "react-html-parser";
import "../MarkedPreview.css";

const Viewer = props => {
  console.log(props.marked);
  return <div className="output">{ReactHtmlParser(props.marked)}</div>;
};

export default Viewer;
