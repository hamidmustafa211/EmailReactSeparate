import React from "react";

function MenuButton(props) {
  return (
    <div>
      <div
        onClick={props.onClick}
        class={`p-2.5 ${
          props.isActive ? "bg-custom-blue" : "hover:bg-slate-700 duration-100"
        } flex items-center rounded-md px-4 cursor-pointer w-60 ml-4 mt-2 `}
      >
        <img class="h-7 select-none" src={props.image} alt="" />

        <span class="text-[17px] ml-4 text-white font-medium select-none">
          {props.text}
        </span>
      </div>
    </div>
  );
}

export default MenuButton;
