import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/3dPerfume.png";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <div className="hero-text">
            <span className="static">Smell</span>
            <Typewriter
              options={{
                strings: ["Sexual", "Exubetant", "Addictive"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p>
            What are your scents about? Are they a whisper or a shout? Whether
            you’re currently on a quest to find your tribe or looking for a
            fragrance to amp up your vibe, Ivara will masterfully create and
            bottle your very own scents of aspiration.
          </p>
          <div className="ctas">
            {/* <div className="banner-cta">Read More</div> */}
            <div className="banner-cta">
              <a href="#bestselling">Explore</a>
            </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} />
      </div>
    </div>
  );
};

export default Banner;
