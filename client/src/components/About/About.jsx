import React from "react";
import BannerImg from "../../assets/about.jpg";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="hero-bannerrr">
        <img src={BannerImg} alt="" srcset="" />
      </div>
      <div className="main-content">
        <div className="headline">
            Legacy of Fragrance making by ivara
        </div>
        <div className="text-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iure eligendi sed tempora facilis laborum delectus commodi, est nisi autem pariatur ullam, nesciunt aliquam, error aperiam obcaecati iusto sunt porro?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iure eligendi sed tempora facilis laborum delectus commodi, est nisi autem pariatur ullam, nesciunt aliquam, error aperiam obcaecati iusto sunt porro?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iure eligendi sed tempora facilis laborum delectus commodi, est nisi autem pariatur ullam, nesciunt aliquam, error aperiam obcaecati iusto sunt porro?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iure eligendi sed tempora facilis laborum delectus commodi, est nisi autem pariatur ullam, nesciunt aliquam, error aperiam obcaecati iusto sunt porro?</p>
        </div>
      </div>
    </>
  );
};

export default About;
