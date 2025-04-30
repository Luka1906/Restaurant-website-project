import cheeseImage from "../assets/Charcuterie.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <section>
      <div className="bg-primary-dark  flex flex-col-reverse md:flex-row md:justify-center  text-text-primary-light font-extralight ">
        <div>
          <img
            src={cheeseImage}
            className="w-2/3 md:w-full md:max-w-md "
            alt="Wooden plate with cheese and fruit"
          />
        </div>
        <div className=" m-auto w-auto py-20">
          <div>
            <h1 className="font-accent text-2xl ">Mon Ami Gabi Chicago</h1>
            <em>
              <p className="text-xs">CHANGE LOCATION</p>
            </em>
          </div>
          <div className="pt-4 flex flex-col gap-2 ">
            <div className="flex  justify-between  ">
              <div className="">Mon-Thu</div>
              <div className="">5pm - 9:30pm</div>
            </div>

            <div className="flex  justify-between  ">
              <div>Fri-Sat</div>
              <div className="">5pm - 10:30pm</div>
            </div>

            <div className="flex  justify-between  ">
              <div>Sun Brunch</div>
              <div>10am - 2:00pm</div>
            </div>

            <div className="flex  justify-between  ">
              <div>Sunday</div>
              <div>5:00pm - 8:30pm</div>
            </div>
          </div>
          <div className="flex flex-start flex-col gap-4 mt-4">
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <p>Contact Us</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <p>773.348.8886</p>
            </div>

            <div className="flex items-center gap-3">
              <FaLocationDot />
              <p>
                2300 N. Lincoln Park West <br /> Chicago, IL 60614
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
