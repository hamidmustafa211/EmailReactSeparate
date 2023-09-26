import React from "react";

function Input(props) {
  return (
    <div>
      <div class="ml-[300px] m-3">
        {/* <div>
          <h2 class="text-white font-bold mb-4 ml-7 text-xl">Writing Email</h2>
        </div> */}
        <div
          class={`bg-slate-800 ${props.divheight} w-11/12 rounded-lg pt-1 ml-8`}
        >
          <div>
            <label class="font-semibold text-white text-sm ml-4" for="">
              {props.label}
            </label>
          </div>

          <div>
            <textarea
              class="outline-none ml-4 bg-slate-800 resize-none mt-1 text-white text-sm"
              placeholder={props.placeholder}
              cols={props.cols}
              rows={props.rows}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
