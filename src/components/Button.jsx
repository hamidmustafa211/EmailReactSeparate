import React from "react";

function Button(props) {
  return (
    <div>
      <div class="flex justify-center gap-x-2 mt-3 ml-[300px]">
        <button
          onClick={props.onClick}
          id={props.id}
          type="button"
          class="bg-custom-blue rounded-md text-slate-50 px-36 py-2.5 font-bold hover:text-slate-400 duration-150"
        >
          {props.text}
        </button>
      </div>
    </div>
  );
}

export default Button;
