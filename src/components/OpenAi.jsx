import React, { useState } from "react";

const apiKey = "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";

function OpenAi() {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (userMessage.trim() === "") return;

    const newUserMessage = { role: "user", content: userMessage };
    setChatHistory([...chatHistory, newUserMessage]);
    setUserMessage("");

    try {
      const response = await getChatResponse(userMessage);
      const newBotMessage = { role: "bot", content: response };
      setChatHistory([...chatHistory, newBotMessage]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      const errorMessage = {
        role: "bot",
        content: "Sorry, there was an error fetching the response.",
      };
      setChatHistory([...chatHistory, errorMessage]);
    }
  };

  async function getChatResponse(message) {
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
    return data.choices[0].message.content;
  }
}

return (
  <div className="h-screen p-7 ">
    <div className="ml-[300px] m-3">
      <h2 className="text-white font-bold mb-4 ml-7 text-xl">Writing Email</h2>
    </div>
    <Input
      label="Enter Text here"
      cols="160"
      rows="20"
      placeholder="Tell us what you want to convey in your email. Type or use your voice to provide instructions, and our AI will create the perfect message."
      value={userMessage}
      onChange={(e) => setUserMessage(e.target.value)} // Ensure the onChange handler is set correctly
    />
    <Link>
      <Button to="/email" text="Submit" onClick={sendMessage} />
    </Link>
    <div id="chatMessages">
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`ml-[300px] text-white chat-message chat-message-${message.role}`}
        >
          {message.content}
        </div>
      ))}
    </div>
  </div>
);

export default OpenAi;
