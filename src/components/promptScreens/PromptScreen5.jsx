import React from "react";
import GenerateMailScreen from "../GenerateMailScreen";
function PromptScreen5() {
  return (
    <div>
      <GenerateMailScreen
        initialValue="Dear [Recipient's Name],

I am writing to inform you that I am resigning from my position as [Your Position] at [Company Name]. My last day of employment will be [Date], providing the standard two weeks' notice.

I appreciate the opportunities I have had during my time at [Company Name]."
      />
    </div>
  );
}

export default PromptScreen5;
