import React from "react";
import { useDispatch } from "react-redux";
import { clearData, fetchPostalInfo } from "../redux/informationSlice";
function Information({ data }) {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    try {
      dispatch(fetchPostalInfo());
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <div className="flex justify-between items-center bg-red-400 mb-4 rounded-md p-5">
        <h2 className="text-2xl font-semibold  underline ">Information</h2>
        <button
          onClick={() => dispatch(clearData())}
          className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Clear Data
        </button>
      </div>
      <div className="md:flex-row flex flex-col mt-8  gap-[45px] flex-wrap min-h-[md]">
        <div className=" shadow-2xl py-4 px-4 ring-2">
          <p className="text-gray-600">Country:</p>
          <p className="text-lg font-semibold">{data[0].country}</p>
        </div>
        {data[0].places.map((item) => (
          <>
            <div className=" ring-1 rounded-md ring-inset shadow-2xl px-4 py-4">
              <p className="text-gray-600">State:</p>
              <p className="text-lg font-semibold">{item.state}</p>
              <p className="text-gray-600">Place Name:</p>
              <p className="text-lg font-semibold">{item["place name"]}</p>
            </div>
          </>
        ))}

        {/* Add more fields as needed */}
      </div>
    </div>
  );
}

export default Information;
