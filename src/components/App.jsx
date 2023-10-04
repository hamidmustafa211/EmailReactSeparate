import React, { useState, createContext } from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import GenerateMailScreen from "./GenerateMailScreen";
import PromptScreenOne from "./promptScreens/PromptScreenOne";
import PromptScreen2 from "./promptScreens/PromptScreen2";
import PromptScreen3 from "./promptScreens/PromptScreen3";
import PromptScreen4 from "./promptScreens/PromptScreen4";
import PromptScreen5 from "./promptScreens/PromptScreen5";
import PromptScreen6 from "./promptScreens/PromptScreen6";
import PromptScreen7 from "./promptScreens/PromptScreen7";
import PromptScreen8 from "./promptScreens/PromptScreen8";
import ToolsScreen1 from "./toolsScreens/ToolsScreen1";
import ToolsScreen2 from "./toolsScreens/ToolsScreen2";
import ToolsScreen3 from "./toolsScreens/ToolsScreen3";
import ToolsScreen4 from "./toolsScreens/ToolsScreen4";
import ToolsScreen5 from "./toolsScreens/ToolsScreen5";
import EmailScreen from "./EmailScreen";
import MenuButton from "./MenuButton";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
export const AppContext = createContext();

function App() {
  const [email, setEmail] = useState([]);
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(0);
  function handleButtonClick(id) {
    setActiveButton(id);
  }

  const buttonsData = [
    { id: 0, text: "Write Mail", image: "/Images/copy-writing.png", to: "/" },
    {
      id: 1,
      text: "Reply Mail",
      image: "/Images/share.png",
      to: "/reply-mail",
    },
    { id: 2, text: "Prompts", image: "/Images/magic.png", to: "/prompts" },
    { id: 3, text: "Tools", image: "/Images/tools.png", to: "/tools" },
    // Add more button data as needed
  ];

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
          {buttonsData.map((button) => (
            <Link to={button.to}>
              <MenuButton
                text={button.text}
                image={button.image}
                isActive={activeButton === button.id}
                onClick={() => handleButtonClick(button.id)}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* Routes */}
      <AnimatePresence mode="wait">
        <AppContext.Provider value={{ email, setEmail }}>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Screen1 />}></Route>
            <Route path="/reply-mail" element={<Screen2 />}></Route>
            <Route path="/prompts" element={<Screen3 />}></Route>
            <Route path="/tools" element={<Screen4 />}></Route>
            <Route
              path="/generate-mail"
              element={<GenerateMailScreen />}
            ></Route>
            <Route path="/day-of-request" element={<PromptScreenOne />}></Route>
            <Route path="/birthday" element={<PromptScreen2 />}></Route>
            <Route
              path="/being-late-for-work"
              element={<PromptScreen3 />}
            ></Route>
            <Route path="/pay-increases" element={<PromptScreen4 />}></Route>
            <Route
              path="/resgination-letter"
              element={<PromptScreen5 />}
            ></Route>
            <Route path="/cover-letter" element={<PromptScreen6 />}></Route>
            <Route path="/arrange-meeting" element={<PromptScreen7 />}></Route>
            <Route path="/data-plan" element={<PromptScreen8 />}></Route>
            <Route path="/email" element={<EmailScreen />}></Route>
            <Route
              path="/personalized-cold-email"
              element={<ToolsScreen1 />}
            ></Route>
            <Route path="/fix-grammer" element={<ToolsScreen2 />}></Route>
            <Route path="/email-subjectline" element={<ToolsScreen3 />}></Route>
            <Route
              path="/question-from-email"
              element={<ToolsScreen4 />}
            ></Route>
            <Route path="/create-summary" element={<ToolsScreen5 />}></Route>
          </Routes>
        </AppContext.Provider>
      </AnimatePresence>
    </div>
  );
}

export default App;
