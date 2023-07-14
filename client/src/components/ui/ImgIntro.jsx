import React from "react";

const ImgIntro = ({ alt, logoAlt, src, logo }) => {
  return (
    <div className="tc-container">
      <img alt={alt} className="main-img" src={src} loading="lazy" />
      <img alt={logoAlt} className="top-img" src={logo} loading="lazy" />
    </div>
  );
};

export default ImgIntro;
