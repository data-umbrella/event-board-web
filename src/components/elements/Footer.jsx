import React from 'react';
import { Link } from 'react-router-dom';
import { DONATE_URL } from 'constants/urls';
import ExternalLinkIcon from 'assets/externalLink.svg'
import githubWhite from 'assets/githubWhite.svg'
import twitterWhite from 'assets/twitterWhite.svg'
import logoDark from 'assets/logoDark.png'


function Footer() {
  return (
    <footer className="block bg-du-indigo-900 min-h-10 md:min-h-60 text-white md:px-40 pt-9 pb-7">
      <div className="hidden md:grid grid-cols-4 text-left">
        <div className="flex flex-col items-center">
          <div className="content-center">
            <img src={logoDark} alt="logo" />
          </div>
          <div className="flex flex-row items-center">
            <a href="https://github.com/data-umbrella/event-board-web">
              <img className="m-2 mb-1 h-7 w-7" src={githubWhite} />
            </a>
            <a href="https://twitter.com/DataEventsBoard">
              <img className="m-2 mb-1 h-7 w-7" src={twitterWhite} />
            </a>
          </div>
        </div>

        <div>
          <ul className="grid lg:grid-rows-3 lg:gap-4">
            <li className="mb-2"><Link to="/about">About Us</Link></li>
            <li className="mb-2"><Link to="/faqs">{"FAQ's"}</Link></li>
          </ul>
        </div>

        <div>
          <ul className="grid lg:grid-rows-3 lg:gap-4">
            <li className="mb-2">
              <a href={DONATE_URL} target="_blank" rel="noreferrer">Donate<img className="pl-1 inline" src={ExternalLinkIcon} alt="external-link"/></a>
            </li>
            <li className="mb-2"><Link to="/sponsors">Sponsors</Link></li>
          </ul>
        </div>
        <div>
          <ul className="grid lg:grid-rows-3 lg:gap-4">
            <li className="mb-2"><Link to="/contact">Contact Us</Link></li>
            <li className="mb-2"><a href="https://www.dataumbrella.org">Data Umbrella<img className="pl-1 inline" src={ExternalLinkIcon} alt="external-link"/></a></li>
            {/* <li className="mb-2"><Link to="/privacy">Privacy</Link></li> */}
            <li className="mb-2"><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-1.5">
        <p>© Data Umbrella 2022</p>
      </div>
    </footer>
  )
}

export default Footer;
