import { useState } from "react";

export default function ReadMore({ text, maxWords = 35,  }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text.split(" ");

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <p>
        {isExpanded
          ? text
          : words.slice(0, maxWords).join(" ") +
            (words.length > maxWords ? "..." : "")}
      </p>
      {words.length > maxWords && (
        <button
          onClick={toggleReadMore}
          className="mt-2 text-text-bold font-light hover:underline cursor-pointer "
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
