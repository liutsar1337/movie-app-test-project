import React from "react";
import "../App.css";
import githubIcon from "../assets/icons/github-icon.png";

const Footer = () => {
  return (
    <div className="footer">
      Developed by Liubomyr Tsaryniak |{" "}
      <a href="https://github.com/liutsar1337" target="_blank" rel="noreferrer">
        liutsar1337
      </a>{" "}
      <img src={githubIcon} alt="GithubIcon" className={"iconStyle"} />
    </div>
  );
};

export default Footer;
