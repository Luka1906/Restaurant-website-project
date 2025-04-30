import image1 from "../assets/FarmersMarket_-2797.jpg";
import image2 from "../assets/MAG-MushroomPasta-1578.jpg";
import image3 from "../assets/MAG-382.jpg";

export default function About() {
  return (
    <main>
      <div className="flex flex-col-reverse gap-10 text-base md:text-sm lg:text-base lg:gap-0 md:grid md:grid-cols-2 px-12 py-20 ">
        {/* Image Section */}

        <figure className="grid grid-cols-2 gap-6 items-end">
          <img src={image1} alt="Cherry tomatoes on the table" className="transition-transform duration-300 hover:scale-[1.02]" />

          <img src={image2} alt="Mushroom pasta with parmesan in the plate" className="transition-transform duration-300 hover:scale-[1.02]" />

          <div className="col-span-2 flex justify-end ">
            <img
              src={image3}
              alt="Dinner at Mon Ami Gabi restaurant"
              className=" max-w-[85%] transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </figure>

        {/* About Section */}

        <div className="m-auto lg:w-3/5 text-justify md:px-0 ">
          <h1 className="text-xl lg:text-2xl font-accent text-text-accent font-bold">
            About
          </h1>
          <p className="leading-relaxed mt-4">
            Mon Ami Gabi is a classic French bistro that embraces a passion for
            food, wine, and culture. Whether you come for the Onion Soup Au
            Gratin, Steak Frites, or decadent Profiteroles, Mon Ami Gabi offers
            something to satisfy all tastes. For those looking to indulge in a{" "}
            <em className="text-text-bold">
              <strong>unique dish, </strong>
            </em>
            the Escargots de Bourgogne with garlic-herb butter is literally a
            sizzling experience.
          </p>
          <p className="leading-relaxed mt-4">
            To complement the menu, an extensive selection of more than{" "}
            <em className="text-text-bold ">
              <strong>80 boutique French wine varietals</strong>
            </em>
            , handpicked by renowned chef and owner Gabino Sotelino, are served
            by the glass or bottle from our signature rolling wine cart.
          </p>
          <p className="leading-relaxed mt-4">
            While the favorites are here in abundance, there's always something
            new when you're ready to fall in love all over again.
          </p>
        </div>
      </div>
    </main>
  );
}
