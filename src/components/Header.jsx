import { FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="pt-6 text-text-primary-dark">
      <div className="flex justify-between ">
        <div>
          <div className="flex justify-center gap-1 h-6 px-12 text-2xl mb-2  ">
            <FaTwitter />
            <FaInstagram />
            <IoLogoFacebook />
          </div>
          <div className="flex items-center ">
            <div className="flex-grow border-b border-border-accent"></div>
            <div className="w-1.5 h-1.5 bg-border-accent rounded-full"></div>
          </div>
        </div>

        <img src={logo}  width={240} height={80} alt="Mon Ami Gabi French Restaurant logo" />
        <div>
          <div className="flex flex-col items-center px-12 mb-2 ">
            <p className="font-accent text-text-accent">Chicago</p>
            <p className="uppercase text-xs">Change location</p>
          </div>

          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-border-accent rounded-full"></div>
            <div className="flex-grow border-b border-border-accent"></div>
          </div>
        </div>
      </div>

      <nav className="mt-10" aria-label="Main navigation">
        <ul className="flex justify-evenly flex-wrap  text-sm font-accent">
          <li>
            <a href="#" className="hover:underline">
              Reservations
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Events
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Private Parties
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Pick Up
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Delivery
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
