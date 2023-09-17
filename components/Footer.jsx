import '@styles/App.css'
import githubIcon from '@assets/icons/github-icon.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        Developed by Liubomyr Tsaryniak{" "}
        <Image loading='lazy' src={githubIcon} alt="GithubIcon" className={"iconStyle"} />{" "}
        <a
          href="https://github.com/liutsar1337"
          target="_blank"
          rel="noreferrer"
        >
          liutsar1337
        </a>{" "}
      </div>
      <div className="designed-text">
        Designed by Martin Brady 2021{" "}
        <a href="https://www.martinbrady.com/" target="_blank" rel="noreferrer">
          martinbrady.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
