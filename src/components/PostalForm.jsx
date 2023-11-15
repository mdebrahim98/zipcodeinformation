import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostalInfo } from "../redux/informationSlice";
function PostalForm() {
  const [postalCode, setpostalCode] = useState("");
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info);
  const handleSubmit = () => {
    if (postalCode == "") {
      alert("Please Enter postal Code!");
      return;
    }
    try {
      dispatch(fetchPostalInfo(postalCode));
    } catch (err) {}
  };
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md ring-2">
      <label
        htmlFor="input"
        className="block text-sm font-medium text-gray-700"
      >
        Postal Code:
      </label>

      <input
        placeholder="Enter postal code...."
        onChange={(e) => setpostalCode(e.target.value)}
        id="input"
        type="text"
        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
      />

      <button
        onClick={() => handleSubmit()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

export default PostalForm;
