import React from "react";
import ToolsButton from "./ToolsButton";
function Screen4(props) {
  const toolsArray = [
    {
      image: "/Images/tool1.png",
      heading: "Create Personalized Cold Email",
      paragraph: "personalized cold email to resonate with the recipient.",
    },
    {
      image: "/Images/tool2.png",
      heading: "Fix Grammer",
      paragraph: "Correct grammatical mistakes for clarity.",
    },
    {
      image: "/Images/tool3.png",
      heading: "Write  Email Subjectline",
      paragraph: "Craft a compelling and concise email subject line late.",
    },
    {
      image: "/Images/tool4.png",
      heading: "Create Question From Email",
      paragraph: "Extract the question from the email content.",
    },
    {
      image: "/Images/tool5.png",
      heading: "Create Summary",
      paragraph: "Summazrized the key points effectively.",
    },
  ];
  return (
    <div className="h-screen p-7 ml-[280px]">
      <div className="grid grid-cols-3 grid-rows-2 gap-3 ml-10 mr-10">
        {toolsArray.map((tool) => {
          return (
            <ToolsButton
              image={tool.image}
              heading={tool.heading}
              paragraph={tool.paragraph}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Screen4;
