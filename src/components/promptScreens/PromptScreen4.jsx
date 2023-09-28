import React from "react";
import GenerateMailScreen from "../GenerateMailScreen";
function PromptScreen4() {
  return (
    <div>
      <GenerateMailScreen initialValue="Write an email asking for a salary increase or negotiating a new salary offer, using the information provided. The email should be professional and clearly state qualifications and value to the company. Additionally, provide guidance on researching salary data and market rates, making a compelling case, and addressing potential objections. [Your Role]" />
    </div>
  );
}

export default PromptScreen4;
