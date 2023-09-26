import React from "react";
import PromptButton from "./PromptButton";
import PromptArray from "./promptArray.js";
import { Link } from "react-router-dom";
function Screen3() {
  return (
    <div className="h-screen p-7 ml-[280px]">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 ml-7 mr-7">
        {PromptArray.map((prompt) => {
          return (
            <Link to={prompt.to}>
              <PromptButton
                image={prompt.image}
                heading={prompt.heading}
                paragraph={prompt.paragraph}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Screen3;
