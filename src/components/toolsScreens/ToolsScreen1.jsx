import React from "react";
import Input from "../Input";
import Button from "../Button";
function ToolsScreen1() {
  return (
    <div className="h-screen p-7 ">
      <div class="ml-[300px] m-3"></div>
      <Input
        label="Tell us about your product"
        cols="160"
        rows="8"
        placeholder="Gym software to help you manage your gym more efficiently and more easily onboard new customers"
      />
      <Input label="Product Name" cols="160" rows="4" placeholder="Pushpress" />
      <Input
        label="Context to inclued in the Email"
        cols="160"
        rows="5"
        placeholder="I saw that you own a jym in Houston TX"
      />
      <Button text="Submit" />
    </div>
  );
}

export default ToolsScreen1;
