import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import AnimatedPages from "./AnimatedPages";
import { useContext } from "react";
import { AppContext } from "./App";
// import dotenv from "dotenv";
// dotenv.config();

const apiKey = process.env.REACT_APP_API_KEY;

function GenerateMailScreen({ initialRows = 20, initialValue = "" }) {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [savedResponses, setSavedResponses] = useState([]);
  const { email, setEmail } = useContext(AppContext);

  const sendMessage = async () => {
    if (userMessage.trim() === "") return;

    const newUserMessage = { role: "user", content: userMessage };
    setChatHistory([""]);
    // setUserMessage("");

    try {
      const response = await getChatResponse(userMessage);
      const newBotMessage = { role: "bot", content: response };
      setChatHistory([newBotMessage]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      const errorMessage = {
        role: "bot",
        content: "Sorry, there was an error fetching the response.",
      };
      setChatHistory([errorMessage]);
    }
  };

  const [isLoading, setIsloading] = useState(false);
  async function getChatResponse(message) {
    setIsloading(true);
    const apiUrl = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    setIsloading(false);
    return data.choices[0].message.content;
  }

  // for hide display
  const [isDivVisible, setDivVisibility] = useState(true);

  const toggleDiv = () => {
    setDivVisibility(!isDivVisible);
  };
  const handleClick = () => {
    sendMessage();
    toggleDiv();
  };
  useEffect(() => {
    setUserMessage(initialValue);
  }, [initialValue]);

  // function handleSavedResponse(message) {
  //   if (message.content) {
  //     setSavedResponces([...savedResponses, message]);
  //   }
  // }
  function handleSavedResponse(message) {
    if (message.content) {
      setEmail([...email, message.content]);
    }
  }

  return (
    <AnimatedPages>
      <div className="min-h-screen p-7">
        {isDivVisible ? (
          <div>
            <div className="ml-[300px] m-3">
              <h2 className="text-white font-bold mb-4 ml-7 text-xl">
                Writing Email
              </h2>
            </div>
            <Input
              label="Enter Text here"
              cols="160"
              rows={initialRows}
              placeholder="Tell us what you want to convey in your email. Type or use your voice to provide instructions, and our AI will create the perfect message."
              value={userMessage}
              onChange={(event) => setUserMessage(event.target.value)} //
            />
            {userMessage ? (
              <Link>
                <Button text="Submit" onClick={handleClick} />
              </Link>
            ) : (
              <Button
                text="Submit"
                onClick={() => alert("Please Type Something")}
              />
            )}
          </div>
        ) : null}

        <div>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`ml-[330px] mr-14 mt-5 text-white chat-message chat-message bg-gray-800  rounded-lg  ${
                isLoading ? null : " p-3 "
              }`}
            >
              {message.content}
              {/* {console.log(message)} */}
              {message.content ? (
                <Button
                  onClick={() => handleSavedResponse(message)}
                  class=" ml-[0px] mt-5"
                  text="Save"
                ></Button>
              ) : null}
            </div>
          ))}
          {/*  */}
          <div className="mt-5">
            <h2 className="text-white font-bold mb-2 text-xl">
              Saved Responses
            </h2>
            {savedResponses.map((response, index) => (
              <div
                key={index}
                className="ml-[300px] text-white bg-gray-800 rounded-lg p-3 mt-2"
              >
                {setEmail([...email, response.content])}

                {/* {setEmail([...email, response.content])} */}
              </div>
            ))}
          </div>
          {/*  */}
          <div className=" absolute inset-y-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {isLoading ? <LoadingSpinner /> : null}
          </div>
        </div>
      </div>
    </AnimatedPages>
  );
}

export default GenerateMailScreen;

// import React, { useState } from "react";
// import Input from "./Input";
// import Button from "./Button";
// import { Link } from "react-router-dom";

// const apiKey = "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"; // Replace with your ChatGPT API key

// function GenerateMailScreen() {
//   const [userMessage, setUserMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);

//   const sendMessage = async () => {
//     if (userMessage.trim() === "") return;

//     const newUserMessage = { role: "user", content: userMessage };
//     setChatHistory([...chatHistory, newUserMessage]);
//     setUserMessage("");

//     try {
//       const response = await getChatResponse(userMessage);
//       const newBotMessage = { role: "bot", content: response };
//       setChatHistory([...chatHistory, newBotMessage]);
//     } catch (error) {
//       console.error("Error fetching chat response:", error);
//       const errorMessage = {
//         role: "bot",
//         content: "Sorry, there was an error fetching the response.",
//       };
//       setChatHistory([...chatHistory, errorMessage]);
//     }
//   };

//   async function getChatResponse(message) {
//     const apiUrl = "https://api.openai.com/v1/chat/completions";
//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     };

//     const requestBody = {
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant.",
//         },
//         {
//           role: "user",
//           content: message,
//         },
//       ],
//     };

//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(requestBody),
//     });

//     const data = await response.json();
//     return data.choices[0].message.content;
//   }

//   return (
//     <div className="h-screen p-7 ">
//       <div className="ml-[300px] m-3">
//         <h2 className="text-white font-bold mb-4 ml-7 text-xl">
//           Writing Email
//         </h2>
//       </div>
//       <Input
//         label="Enter Text here"
//         cols="160"
//         rows="20"
//         placeholder="Tell us what you want to convey in your email. Type or use your voice to provide instructions, and our AI will create the perfect message."
//         value={userMessage}
//         onChange={(e) => setUserMessage(e.target.value)} // Ensure the onChange handler is set correctly
//       />
//       <Link>
//         <Button to="/email" text="Submit" onClick={sendMessage} />
//       </Link>
//       <div id="chatMessages">
//         {chatHistory.map((message, index) => (
//           <div
//             key={index}
//             className={`ml-[300px] text-white chat-message chat-message-${message.role}`}
//           >
//             {message.content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default GenerateMailScreen;
