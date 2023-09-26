import React from "react";
import Input from "./Input";
import Button from "./Button";
function GenerateMailScreen() {
  return (
    <div className="h-screen p-7 ">
      <div class="ml-[300px] m-3">
        <h2 class="text-white font-bold mb-4 ml-7 text-xl">Writing Email</h2>
      </div>
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

export default GenerateMailScreen;
