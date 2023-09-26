import React from "react";
import ToolsButton from "./ToolsButton";
import { Link } from "react-router-dom";
function Screen4(props) {
  const toolsArray = [
    {
      image: "/Images/tool1.png",
      heading: "Create Personalized Cold Email",
      paragraph: "personalized cold email to resonate with the recipient.",
      to: "/personalized-cold-email",
    },
    {
      image: "/Images/tool2.png",
      heading: "Fix Grammer",
      paragraph: "Correct grammatical mistakes for clarity.",
      to: "/fix-grammer",
    },
    {
      image: "/Images/tool3.png",
      heading: "Write  Email Subjectline",
      paragraph: "Craft a compelling and concise email subject line late.",
      to: "/email-subjectline",
    },
    {
      image: "/Images/tool4.png",
      heading: "Create Question From Email",
      paragraph: "Extract the question from the email content.",
      to: "/question-from-email",
    },
    {
      image: "/Images/tool5.png",
      heading: "Create Summary",
      paragraph: "Summazrized the key points effectively.",
      to: "/create-summary",
    },
  ];
  return (
    <div className="h-screen p-7 ml-[280px]">
      <div className="grid grid-cols-3 grid-rows-2 gap-3 ml-10 mr-10">
        {toolsArray.map((tool) => {
          return (
            <Link to={tool.to}>
              <ToolsButton
                image={tool.image}
                heading={tool.heading}
                paragraph={tool.paragraph}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Screen4;
