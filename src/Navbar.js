import { useState } from "react";
import logo from "./icon/gym-dumbbell-hand-drawn-tool-svgrepo-com.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav>
      <div className="nav-container">
        <div className="icon">
          <a href="#home" class="home">
            <img src={logo} alt="logo" size={30} />
            <h1 style={{ textDecoration: "none" }}>Fit-Gym</h1>
          </a>
        </div>
        <div className={`links ${nav ? "links-show" : ""}`}>
          <div className="link">
            <Link onClick={() => setNav(false)} to="home">
              Home
            </Link>
          </div>
          <div className="link">
            <Link onClick={() => setNav(false)} to="about" offset={-50}>
              About
            </Link>
          </div>
          <div className="link">
            <Link onClick={() => setNav(false)} to="pricing" offset={-50}>
              Pricing
            </Link>
          </div>
          <div className="link">
            <Link onClick={() => setNav(false)} to="contact">
              Contact us
            </Link>
          </div>
        </div>
        <div className="nav-icon" onClick={() => setNav(!nav)}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
