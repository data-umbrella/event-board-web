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
            <li className="mb-2">About us</li>
            <li className="mb-2">Meet the team</li>
            <li className="mb-2">Contact Us</li>
          </ul>
        </div>

        <div>
          <ul className="grid lg:grid-rows-3 lg:gap-4">
            <li className="mb-2">Donate</li>
            <li className="mb-2">Sponsors</li>
            <li className="mb-2">FAQ's</li>
          </ul>
        </div>

        <div>
          <ul className="grid lg:grid-rows-3 lg:gap-4">
            <li className="mb-2">Data Umbrella</li>
            <li className="mb-2">Privacy</li>
            <li className="mb-2">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
