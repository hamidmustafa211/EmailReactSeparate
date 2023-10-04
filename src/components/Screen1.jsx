import React from "react";
import GenerateMailScreen from "./GenerateMailScreen";
import { Link } from "react-router-dom";
import AnimatedPages from "./AnimatedPages";
import { useContext } from "react";
import { AppContext } from "./App";
function Screen1() {
  const { email, setEmail } = useContext(AppContext);

  return (
    <AnimatedPages>
      <div>
        <div id="screen1" class="ml-[300px] min-h-screen">
          <div class="flex justify-center h-[620px] items-center">
            <img class="h-56 select-none" src="/Images/Letter.png" alt="" />
          </div>

          <h1 className="text-white bg-slate-400">{email}</h1>

          <div class="flex justify-center">
            <Link to="/generate-mail">
              <button class="bg-custom-blue m-4 rounded-md text-slate-50 px-52 py-2.5 font-bold hover:text-slate-400 duration-150 select-none">
                Generate Ai Email
              </button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPages>
  );
}

export default Screen1;
