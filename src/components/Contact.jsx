import cheeseImage from "../assets/Charcuterie.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <section>
      <div className="bg-primary-dark grid grid-cols-2 text-text-primary-light font-extralight ">
        <div className="">
          <img src={cheeseImage} className=" relative right-18" alt="Cheese plate" />
        </div>
        <div className=" flex flex-col gap-4  m-auto w-auto py-10">
          <div>
            <h1 className="font-accent text-2xl ">Mon Ami Gabi Chicago</h1>
            <em>
              <p className="text-xs">CHANGE LOCATION</p>
            </em>
          </div>
          <div>
            <div className="flex justify-between  ">
              <div className="">Mon-Thu</div>
              <div className="">5pm - 9:30pm</div>
            </div>

            <div className="flex justify-between   ">
              <div>Fri-Sat</div>
              <div className="">5pm - 10:30pm</div>
            </div>

            <div className="flex justify-between   ">
              <div>Sun Brunch</div>
              <div>10am - 2:00pm</div>
            </div>

            <div className="flex justify-between   ">
              <div>Sunday</div>
              <div>5:00pm - 8:30pm</div>
            </div>
          </div>

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
            <p>2300 N. Lincoln Park West <br/> Chicago, IL 60614</p>
          </div>
        </div>
      </div>
    </section>
  );
}
