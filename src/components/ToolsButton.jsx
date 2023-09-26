import React from "react";

function ToolsButton(props) {
  return (
    <div>
      <div className="">
        <div class="bg-gray-800 rounded-lg pt-3 pb-7 p-3 cursor-pointer hover:bg-sky-950 duration-100">
          <img class="h-12" src={props.image} alt="" />
          <h2 class="text-white font-bold text-sm mb-1 mt-2">
            {props.heading}
          </h2>
          <p class="text-gray-400 text-sm">{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default ToolsButton;
