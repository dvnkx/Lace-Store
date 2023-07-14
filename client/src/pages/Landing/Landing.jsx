import React from "react";
import "./styles.css";

import { ImgIntro } from "../../components/ui/index";
import {
  adidas_logo,
  nb_logo,
  nike_logo,
  puma_logo,
  background,
  example,
} from "../../assets/index.js";

export const Landing = () => {
  return (
    <div className="landing-container">
      <h1>Discover limited sneakers without limitation</h1>
      <div className="content">
        <div className="brand-intro">
          <ImgIntro
            alt={"new-balance"}
            logoAlt={"new-balance-logo"}
            src={
              "https://img.modivo.cloud/zoomapp(1/d/c/7/1dc7fa2a855f0aff675f66b350886a7196dbcaba_01_0000301874157_bs.jpg,webp)/new-balance-snikerci-m2002rea-golubii.webp"
            }
            logo={nb_logo}
          />
          <ImgIntro
            alt={"nike"}
            logoAlt={"nike-logo"}
            src={
              "https://img.modivo.cloud/product(b/4/4/9/b44983aabb9ed3c6718a674624537b8401fcafd8_0000208545129_01_ts,webp)/nike-vzuttia-react-hyperset-ci2955-140-bilii.webp"
            }
            logo={nike_logo}
          />
          <ImgIntro
            alt={"adidas"}
            logoAlt={"adidas-logo"}
            src={
              "https://img.modivo.cloud/product(9/1/c/a/91cab012e6eb0c10c921bae4f133a80c080801f1_01_0000301202141_pa.jpg,webp)/adidas-vzuttia-adi2000-hq6917-golubii.webp"
            }
            logo={adidas_logo}
          />
          <ImgIntro
            alt={"yeezy"}
            logoAlt={"yeezy-logo"}
            src={
              "https://img.modivo.cloud/product(8/9/5/7/8957f031388a5e69d3fd7db9abb45c2343c9af7a_0000209287899_01_plj_1.jpg,webp)/puma-snikerci-mayze-lth-wns-381983-01-bilii.webp"
            }
            logo={puma_logo}
          />
        </div>
        <p className="text-intro">What are we talking about?</p>
        <div className="text-content">
          <p className="description">
            Welcome to our website! We are a premier destination for sneaker
            enthusiasts looking to add some heat to their collection. Our
            inventory includes a wide variety of the coolest and most highly
            coveted limited edition kicks, perfect for hypebeasts and
            sneakerheads alike.
            <br /> <br /> Our collection features some of the most sought-after
            sneakers in the world, including classic retros and the hottest
            collaborations. We understand the thrill of getting your hands on a
            rare pair of kicks, which is why we&apos;re committed to bringing
            you the best selection of limited edition sneakers from around the
            globe. <br /> <br />
            Our team is made up of dedicated sneakerheads who are passionate
            about footwear and the culture surrounding it. We work hard to
            ensure that our inventory is always up-to-date with the latest
            releases, so you can stay on top of the game and step up your
            sneaker game. <br /> <br /> We take pride in providing our customers
            with exceptional service and a seamless shopping experience. Our
            website is user-friendly and easy to navigate, allowing you to
            browse our selection with ease. We also offer fast and reliable
            shipping, so you can get your kicks delivered straight to your
            doorstep. <br /> <br /> Whether you&apos;re looking to add to your
            collection or are a new sneakerhead just starting out, we&apos;ve
            got you covered. Check out our selection today and discover the
            perfect pair of sneakers to take your style to the next level.
          </p>
        </div>
        <p className="text-intro">Are they legit?</p>
      </div>
      <div className="legit">
        <img
          alt="example-img"
          src={example}
          className="example-img"
          loading="lazy"
        />
        <h1>
          100% <br /> LEGIT
        </h1>
        <p className="item-1">1800 sold 🤑</p>
        <p className="item-2">Sheesh 🔥</p>
        <p className="item-3">Just do it 🤛</p>
        <h2>
          Our sneakers is 100% LEGIT. <br /> FAKE IS BULLSH*T
        </h2>
        <img
          alt="background"
          src={background}
          className="background"
          loading="lazy"
        />
      </div>
      <div className="hot-cards"></div>
    </div>
  );
};
