import React from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMG } from '../../constants';

var TestimonialsCard3 = function TestimonialsCard3(props) {
  var type = props.type,
      clxBg = props.clxBg;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("li", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4 bg-gray-100 p-10 text-gray-500"
  }, /*#__PURE__*/React.createElement("svg", {
    height: "25px",
    className: "mb-5",
    fill: "#5a67d8",
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 32 32",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", {
    id: "right_x5F_quote"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"
  }))))), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm leading-6"
  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    className: "w-12 h-12 rounded-full mr-4",
    src: IMG.profile,
    alt: "Avatar of Jonathan Reinink"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-sm"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out font-medium leading-none"
  }, "Jonathan Reinink"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600"
  }, "Aug 18"))))));
};

export default TestimonialsCard3;