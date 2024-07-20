import { useState } from "react";
const Content = ({ content }) => {
  //   const [content, setContent] = useState(
  //     "From Concept to Feedback: Build Landing Pages in No Time."
  //   );
  //   const handleContent = (event) => {
  //     setContent(event.target.innerText.reverse());
  //     console.log(content);
  //   };
  return (
    <div
      className="text-4xl sm:text-5xl md:text-6xl w-full text-center lg:text-left"
      id="waitlist"
    >
      <div
        style={{ direction: "ltr !important" }}
        className=" mx-auto py-10 font-bold"
        // onInput={handleContent}
      >
        {content}
      </div>
    </div>
  );
};

export default Content;
