import React from "react";
import GenerateMailScreen from "../GenerateMailScreen";
function PromptScreenOne() {
  return (
    <div>
      <GenerateMailScreen initialValue="Dear [Manager's Name], I regret to inform you that I will be late for work today. Due to [reason], I anticipate arriving [estimated time] behind schedule. I sincerely apologize for any inconvenience caused and will make every effort to minimize any disruption to my work. Thank vou for your understanding and support." />
    </div>
  );
}

export default PromptScreenOne;
