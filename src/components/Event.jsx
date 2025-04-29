import Card from "./UI/Card";
import ReadMore from "./UI/ReadMore";
import Button from "./UI/Button";

export default function Event({ event }) {
  return (
    <div className="w-full max-w-[1000px] ">
      <Card className="flex items-center p-4  gap-6">
        <div >
          <div
            className="flex-shrink-0 bg-cover bg-center w-64 h-64 rounded-md "
            style={{ backgroundImage: `url(${event.featured_image.url})` }}
          ></div>
          {event.cta_url && (
            <a className="cursor-pointer font-light border-b-1 border-text-bold relative top-1"  href={event.cta_url}>
              {event.cta_btn}
            </a>
          )}
        </div>

        <div className="flex flex-col ">
          <h2 className="text-2xl mb-2 font-accent ">{event.title}</h2>
          <p className="text-text-bold font-semibold mb-4 ">
            {event.date || "Date not available yet!"}
          </p>
          <ReadMore text={event.content} />
        </div>
      </Card>
    </div>
  );
}
