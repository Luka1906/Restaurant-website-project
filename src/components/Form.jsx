import { useState, useRef } from "react";
import salmonImage from "../assets/MAG-Salmon_Anjali Pinto.jpg";
import Input from "./UI/Input";
import Button from "./UI/Button";

export default function Form() {
  const peopleNumberRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();

  const [error, setError] = useState(false);

// Handle form validation, empty input fields, and console.log success submit message

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const peopleNumber = peopleNumberRef.current.value.trim();
    const date = dateRef.current.value.trim();
    const time = timeRef.current.value.trim();

    if (!peopleNumber || !date || !time) {
      setError(true);
      return;
    }

    setError(false);
    console.log(
      `You’ve successfully booked a table for ${peopleNumber} people on ${date} at ${time}`
    );
    peopleNumberRef.current.value = "";
    dateRef.current.value = "";
    timeRef.current.value = "";
  };
  return (
    <section>
      <div className="bg-text-primary-light md:grid md:grid-cols-3 flex flex-col gap-6  ">
        <div className="flex justify-center pt-6  ">
          <div className="flex flex-col  m-auto justify-center px-12 gap-3   ">
            <h1 className="font-accent text-2xl  text-center">
              Make a Reservation
            </h1>
            <form className="flex flex-col gap-2">
              <Input
                ref={peopleNumberRef}
                className="rounded-tl-md"
                placeholder="2 people"
                required
              />
              <Input ref={dateRef} placeholder="Feb 28, 2018" required />
              <Input ref={timeRef} placeholder="7:00pm" required />
              {error && (
                <p className="text-red-500 text-sm ">
                  All fields are required.
                </p>
              )}
              <Button
                onClick={handleSubmit}
                className="rounded-br-md cursor-pointer "
                type="submit"
              >
                FIND A TABLE
              </Button>
            </form>
          </div>
        </div>

        <img
          src={salmonImage}
          className="md:col-span-2 "
          alt="Baked salmon in the plate"
        />
      </div>
    </section>
  );
}
