import React from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import MenuButton from "./MenuButton";
import { Link, Route, Routes } from "react-router-dom";
import GenerateMailScreen from "./GenerateMailScreen";
function App() {
  return (
    <div className="bg-gray-900 m-0 p-0 font-body">
      <div class="">
        <div class="fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
          <div class="text-gray-100 text-xl">
            <div class="my-4 bg-white w-[1px] h-[660px] absolute mx-72"></div>
            <div class="flex items-center justify-center">
              <img class="w-56" src="/Images/logo.png" alt="" />
            </div>
          </div>

          {/* <!-- menu buttons start --> */}

          <Link to="/">
            <MenuButton text="Write Mail" image="/Images/copy-writing.png" />
          </Link>
          <Link to="/reply-mail">
            <MenuButton text="Reply Mail" image="/Images/share.png" />
          </Link>
          <Link to="/prompts">
            <MenuButton text="Prompts" image="/Images/magic.png" />
          </Link>
          <Link to="/tools">
            <MenuButton text="Tools" image="/Images/tools.png" />
          </Link>
        </div>
      </div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Screen1 />}></Route>
        <Route path="/reply-mail" element={<Screen2 />}></Route>
        <Route path="/prompts" element={<Screen3 />}></Route>
        <Route path="/tools" element={<Screen4 />}></Route>
        <Route path="/generate-mail" element={<GenerateMailScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
