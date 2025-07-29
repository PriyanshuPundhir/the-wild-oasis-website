"use client";

import { useState } from "react";
import { updateGuest } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  const [count, setCount] = useState();
  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-4 px-6 text-base flex gap-4 flex-col"
    >
      {/* Name and Email side by side */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="space-y-1 w-full md:w-1/2">
          <label>Full name</label>
          <input
            name="fullName"
            disabled
            defaultValue={fullName}
            className="px-4 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-1 w-full md:w-1/2">
          <label>Email address</label>
          <input
            name="email"
            defaultValue={email}
            disabled
            className="px-4 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>
      </div>

      {/* Nationality selector */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-4 rounded-sm"
          />
        </div>

        {children}
      </div>

      {/* National ID */}
      <div className="space-y-1">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="px-4 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      {/* Submit button */}
      <div className="flex justify-end items-center gap-4">
        <SubmitButton pendingLable="Updating...">Update Profile</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
