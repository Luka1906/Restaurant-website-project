import { useState } from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo.png";
import HamburgerMenu from "./UI/HamburgerMenu";

export default function Header() {
 const [isOpen, setIsOpen] = useState(false);
const [isExiting, setIsExiting] = useState(false);
  
  const handleIsOpen = () => {
   setIsOpen(true);
  };

  const handleIsClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsExiting(false);
    }, 350); 
  };
  return (
    <header className="pt-6 text-text-primary-dark ">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 md:justify-between   ">
        <div>
          <div className="flex  gap-1  md:px-12 text-xl md:text-2xl mb-1 md:mb-2  ">
            <FaTwitter aria-label="Follow us on Twitter" />
            <FaInstagram aria-label="Follow us on Instagram" />
            <IoLogoFacebook aria-label="Follow us on Facebook" />
          </div>
          <div className="flex items-center ">
            <div className="flex-grow border-b border-border-accent"></div>
            <div className="w-1.5 h-1.5 bg-border-accent rounded-full"></div>
          </div>
        </div>

        <img
          src={logo}
          className="w-72 md:w-96 m-auto"
          alt="Mon Ami Gabi French Restaurant logo"
        />
        <div>
          <div className="flex h-10 flex-col items-center px-6 md:px-12 mb-2 ">
            <p className="font-accent text-text-accent">Chicago</p>
            <p className="uppercase text-xs">Change location</p>
          </div>

          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-border-accent rounded-full"></div>
            <div className="flex-grow border-b border-border-accent"></div>
          </div>
        </div>
      </div>

      <nav className="mt-10 " aria-label="Main navigation relative  ">
        <ul className=" flex px-4 md:px-0 gap-4 md:gap-0  justify-evenly md:justify-evenly items-center text-lg  md:text-base font-accent relative ">
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
          <li className="hidden custom-md:block">
            <a href="#" className="hover:underline">
              Private Parties
            </a>
          </li>
          <li className="hidden custom-md:block">
            <a href="#" className="hover:underline">
              Pick Up
            </a>
          </li>
          <li className="hidden custom-md:block">
            <a href="#" className="hover:underline">
              Delivery
            </a>
          </li>
          <li className="hidden xs:block" >
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </li>
          <li className="hidden md:block">
            <a href="#" className="hover:underline">
              Gallery
            </a>
          </li>
          <li className=" flex items-center text-2xl  sm:hidden cursor-pointer ">
            <button onClick={handleIsOpen} className="cursor-pointer  ">
              {" "}
              <RxHamburgerMenu   />
            </button>
          </li>
        </ul>
      </nav>
      {isOpen && <HamburgerMenu onClose={handleIsClose} isExiting={isExiting}  />}
    </header>
  );
}
