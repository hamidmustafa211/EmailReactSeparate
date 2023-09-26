import React from "react";
import Input from "../Input";
import Button from "../Button";
function PromptScreenOne() {
  return (
    <div className="h-screen p-7">
      <div class="ml-[300px] m-3"></div>
      <Input
        label="Enter Text here"
        cols="160"
        rows="20"
        placeholder="Tell us what you want to convey in your email. Type or use you voice to provide instructions, and our Ai will create the perfect message."
      />
      <Button text="Submit" />
    </div>
  );
}

export default PromptScreenOne;
