import React from "react";
import Input from "./Input";
import Button from "./Button";
import AnimatedPages from "./AnimatedPages";
function Screen2() {
  return (
    <AnimatedPages>
      <div className="h-screen pt-7">
        <div>
          <Input
            cols="162"
            rows="13"
            label="Enter text here"
            placeholder="Paste your recived email here, and let AI to generate the perfect Questions for you."
            divheight="h-[300px]"
          />
        </div>

        <div>
          <Input
            cols="162"
            rows="6"
            placeholder="Tell email assistant how to reply"
            button="Submit"
            divheight="h-[155px]"
          />
          <Button text="Submit" />
        </div>
      </div>
    </AnimatedPages>
  );
}

export default Screen2;
