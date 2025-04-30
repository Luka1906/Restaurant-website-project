import logo from "../../assets/logo.png";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function HamburgerMenu({ onClose, isExiting }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={`bg-text-primary-light h-screen w-screen absolute top-0 z-50 pb-20 flex flex-col justify-center items-center gap-16 sm:hidden ${
        isExiting ? "animate-slideFadeOutRight" : "animate-slideFadeInRight"
      }`}
    >
      <div className="absolute top-8 right-8 p-2  flex items-center hover:bg-primary-dark hover:text-text-primary-light hover:rounded-3xl hover:cursor-pointer ">
        <button onClick={onClose} className=" text-2xl cursor-pointer">
          <AiOutlineClose />
        </button>
      </div>

      <img
        src={logo}
        alt="Mon Ami Gabi French Restaurant logo"
        className="w-56"
      />
      <div>
        <ul className="flex flex-col items-center gap-4 cursor-pointer text-lg">
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
      </div>
    </div>
  );
}
