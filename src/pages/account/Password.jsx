import React from "react";
import Textinput from "../../components/ui/Textinput";

function Password() {
  return (
    <div className="p-5 border rounded-md mt-5">
      <div className="grid md:grid-cols-2 md:justify-center gap-4">
        <Textinput
          label={"Current Password"}
          placeholder="Enter Your Current Password"
        />
        <Textinput
          label={"New Password"}
          placeholder="Enter Your New Password"
        />
        <Textinput
          label={"Confirm Password"}
          placeholder="Confirm Your New Password"
          classGroup="md:col-span-2"
        />
      </div>
      <div className="w-full flex justify-end mt-6">
        <div>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Password;
