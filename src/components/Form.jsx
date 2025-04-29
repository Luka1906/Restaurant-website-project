import salmonImage from "../assets/MAG-Salmon_Anjali Pinto.jpg";
import Input from "./UI/Input";
import Button from "./UI/Button";

export default function Form() {
  return (
    <section>
      <div className="bg-text-primary-light grid grid-cols-3">
        <div className="flex justify-end">
          <div className="flex flex-col m-auto justify-center px-12 gap-3  ">
            <h1 className="font-accent text-2xl  text-center">
              Make a Reservation
            </h1>
            <form className="flex flex-col gap-2">
              <Input className="rounded-tl-md " placeholder="2 people" />
              <Input placeholder="Feb 28, 2018" />
              <Input placeholder="7:00pm" />
              <Button className="rounded-br-md">FIND A TABLE</Button>
            </form>
          </div>
        </div>

        <img src={salmonImage} className="col-span-2 " alt="" />
      </div>
    </section>
  );
}
