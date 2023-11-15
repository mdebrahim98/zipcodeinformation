import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-full ">
      <div className=" rounded-full h-16 w-16 border-b-4 animate-spin border-blue-500 border-solid"></div>
      <p className="text-lg ml-4">Loading...</p>
    </div>
  );
}

export default Loading;
