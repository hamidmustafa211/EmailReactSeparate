import React from "react";
import Input from "../Input";
import Button from "../Button";

function ToolsScreen3() {
  return (
    <div className="h-screen p-7">
      <div class="ml-[300px] m-3"></div>
      <Input
        label="Enter Text here"
        cols="160"
        rows="20"
        placeholder="Paste your recived email here, and let AI to create the subjectline for you."
      />
      <Button text="Submit" />
    </div>
  );
}

export default ToolsScreen3;
