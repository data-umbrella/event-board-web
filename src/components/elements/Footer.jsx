import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from 'assets/logo-color.svg';

function Footer() {
  return (
    <footer className="block bg-du-indigo-900 min-h-10 md:min-h-60 text-white md:px-40 pt-9 pb-7">
      <div className="hidden md:grid grid-cols-4 text-left">
        <div>
          <img src={logoImg} alt="logo" className="h-32 w-40" />
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
            <li className="mb-2"><a href="https://opencollective.com/data-umbrella">Donate</a></li>
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
            <li className="mb-2"><a href="https://www.dataumbrella.org">Data Umbrella</a></li>
            <li className="mb-2"><Link to="/privacy">Privacy</Link></li>
            <li className="mb-2">Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-2.5">
        © Data Umbrella 2022
      </div>
    </footer>
  )
}

export default Footer;
