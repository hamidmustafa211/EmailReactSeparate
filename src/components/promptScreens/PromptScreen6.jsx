import React from "react";
import GenerateMailScreen from "../GenerateMailScreen";
function PromptScreen6() {
  return (
    <div>
      <GenerateMailScreen initialValue="I want you to act as a cover letter writer. I'd like you to help me write a cover letter that consists of three paragraphs and follows this standardized structure. In the first paragraph, mention the role I'm applying for [Senior Architect]" />
    </div>
  );
}

export default PromptScreen6;
