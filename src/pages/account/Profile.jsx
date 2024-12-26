import React from "react";
import Textinput from "../../components/ui/Textinput";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { useForm } from "react-hook-form";

function Profile() {
  const { control } = useForm();
  return (
    <div className="p-5 border rounded-md mt-5">
      <div className="grid md:grid-cols-2 md:justify-center gap-4">
        <Textinput label={"First Name"} placeholder="Enter Your First Name" />
        <Textinput label={"Last Name"} placeholder="Enter Your Last Name" />
        <Textinput label={"Email"} placeholder="Enter Your Email" />
        <Textinput
          label={"Birthdate"}
          placeholder="Enter Your Birthdate"
          type={"date"}
        />
        <div className="formGroup">
          <label className="form-label">Phone#</label>
          <PhoneInputWithCountry
            name="phone"
            control={control}
            className="border px-3 py-2 rounded-md"
          />
        </div>
      </div>
      <div className="w-full flex justify-end mt-6">
        <div>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
