import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from 'assets/logo-color.svg';
import { donateURL } from 'constants/donate';
import ExternalLinkIcon from 'assets/externalLink.svg'
import githubWhite from 'assets/githubWhite.svg'
import twitterWhite from 'assets/twitterWhite.svg'

function Footer() {
  return (
    <footer className="block bg-du-indigo-900 pt-9 pb-7 text-white md:h-60 md:px-40">
      <div className="hidden grid-cols-4 text-left md:grid">
        <div className="flex flex-col items-start">
          <div>
            <img src={logoImg} alt="logo" className="h-32 w-40" />
          </div>
          <div className="ml-9 flex flex-row">
            <a href="https://github.com/data-umbrella/event-board-web">
              <img className="m-2 mb-1 h-7" src={githubWhite} />
            </a>
            <a href="https://twitter.com/DataEventsBoard">
              <img className="m-2 mb-1 h-7 w-7" src={twitterWhite} />
            </a>
          </div>
        </div>

        <div>
          <ul className="grid lg:grid-rows-3 lg:gap-4">
            <li className="mb-2"><Link to="/about">About Us</Link></li>
            <li className="mb-2"><Link to="/about">Meet the Team</Link></li>
            <li className="mb-2"><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <ul className="grid lg:grid-rows-3 lg:gap-4">
            <li className="mb-2">
              <a href={donateURL} target="_blank" rel="noreferrer"> Donate</a>
            </li>
            <li className="mb-2"><Link to="/sponsors">Sponsors</Link></li>
            <li className="mb-2">
              <Link to="/faqs">
                {"FAQ's"}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="grid lg:grid-rows-3 lg:gap-4">
            <li className="mb-2"><a href="https://www.dataumbrella.org">Data Umbrella<img className="inline pl-1" src={ExternalLinkIcon} alt="external-link"/></a></li>
            <li className="mb-2"><Link to="/privacy">Privacy</Link></li>
            <li className="mb-2"><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="pt-1.5 text-center">
        <p>© Data Umbrella 2022</p>
      </div>
    </footer>
  )
}

export default Footer;
