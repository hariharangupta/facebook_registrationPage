import React from "react";
import "./Styles/Main.css";
import fb_business from "./fb_business.jpg";
import fb_community from "./fb_community.png";

const Main = () => {

  const renderBusiness = () => {};
  const rendercommunity = () => {};

  return (
    <main className="main">
      <div className="main-content">
        <h1 className="main-h1">Create a Page</h1>
        <p className="main-p">
          Connect your business, yourself or your cause to the worldwide
          community of people on Facebook. To get started, choose a Page
          category.
        </p>
      </div>
      <div className="main-down">
        <div className="main-left">
          <img className="main-leftImg" src={fb_business} alt="" />
          <h2 className="main-lefth2">Business or brand</h2>
          <p className="main-leftp">
            Showcase your products and services, spotlight your brand and reach
            more customers on Facebook.
          </p>
          <button
            to="/facebook"
            onClick={renderBusiness}
            className="main-leftBtn"
          >
            Get Started
          </button>
        </div>
        <div className="main-right">
          <img className="main-rightImg" src={fb_community} alt="" />
          <h2 className="main-righth2">Community or public figure</h2>
          <p className="main-rightp">
            Connect and share with people in your community, organisation, team,
            group or club.
          </p>
          <button
            to="/facebook"
            onClick={rendercommunity}
            className="main-rightBtn"
          >
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
