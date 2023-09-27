import React from "react";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";

function PromptScreen2() {
  return (
    <div className="h-screen p-7">
      <div class="ml-[300px] m-3"></div>
      <Input
        value="Dear [Manager's Name], I regret to inform you that I will be late for work today. Due to [reason], I anticipate arriving [estimated time] behind schedule. I sincerely apologize for any inconvenience caused and will make every effort to minimize any disruption to my work. Thank vou for your understanding and support."
        id="input2"
        label="Enter Text here"
        cols="160"
        rows="20"
      />
      <Button text="Submit" />
    </div>
  );
}

export default PromptScreen2;
