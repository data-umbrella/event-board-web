import React from 'react';
import logoImg from 'assets/logo.png';

function Footer() {
  return (
    <footer className="block bg-indigo-900 min-h-60">
      <div className="grid lg:grid-cols-4 text-white px-32 pt-12 pb-24 text-left">
        <div>
          <img src={logoImg} alt="logo" className="mb-2" />
        </div>

        <div>
          <ul className="grid lg:grid-rows-3 lg:gap-4">
            <li className="mb-2"><a href="/about">About us</a></li>
            <li className="mb-2">Meet the team</li>
            <li className="mb-2"><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <ul className="grid lg:grid-rows-3 lg:gap-4">
            <li className="mb-2">Donate</li>
            <li className="mb-2"><a href="/sponsors">Sponsors</a></li>
            <li className="mb-2">
              <a href="/faqs">
                { "FAQ's" }
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="grid lg:grid-rows-3 lg:gap-4">
            <li className="mb-2"><a href="https://www.dataumbrella.org">Data Umbrella</a></li>
            <li className="mb-2">Privacy</li>
            <li className="mb-2">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
