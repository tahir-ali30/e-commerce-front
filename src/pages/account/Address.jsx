import React from "react";
import Textinput from "../../components/ui/Textinput";

function Address() {
  return (
    <div className="p-5 border rounded-md mt-5">
      <div className="grid grid-cols-2 justify-center gap-4">
        <Textinput label={"Address #1"} placeholder="Enter Your Address #1" />
        <Textinput
          label={"Address #2"}
          placeholder="Enter Your Address #2 (Optional)"
        />
        <Textinput
          label={"Zip/Postal Code"}
          placeholder="Enter Your Zip/Postal Code"
        />
        <Textinput label={"City"} placeholder="Enter Your City" />
        <Textinput label={"State"} placeholder="Enter Your State" />
        <Textinput label={"Country"} placeholder="Enter Your Country" />
      </div>
      <div className="w-full flex justify-end mt-6">
        <div>
          <button className="btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Address;
