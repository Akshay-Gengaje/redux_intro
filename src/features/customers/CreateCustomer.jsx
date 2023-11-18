import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();
  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div className="font-sans flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-5 ">Create new customer</h2>
      <div className="p-6 bg-black bg-opacity-30 mx-6 space-y-3 rounded-lg text-lg uppercase h-full w-[50%] flex flex-col ">
        <div className="flex justify-between">
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="rounded-md w-96"
          />
        </div>
        <div className="flex justify-between">
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            className="rounded-md w-96"
          />
        </div>
        <button
          onClick={handleClick}
          className="bg-gray-200 p-1 rounded-md font-sans"
        >
          Create new customer
        </button>
      </div>
    </div>
  );
}

export default CreateCustomer;
