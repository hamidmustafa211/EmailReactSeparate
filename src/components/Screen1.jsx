import React from "react";

function Screen1() {
  return (
    <div>
      <div id="screen1" class="ml-[300px] h-screen">
        <div class="flex justify-center h-[620px] items-center">
          <img class="h-56 select-none" src="/Images/Letter.png" alt="" />
        </div>
        <div class="flex justify-center">
          <button
            id="generateButton"
            class="bg-custom-blue rounded-md text-slate-50 px-52 py-2.5 font-bold hover:text-slate-400 duration-150 select-none"
          >
            Generate Ai Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default Screen1;
