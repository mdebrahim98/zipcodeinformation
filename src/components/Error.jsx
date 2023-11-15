import React from "react";

function Error({ error }) {
  return (
    <div className=" mx-auto w-full p-5 md:max-w-lg flex justify-center   min-h-[100px] items-center rounded-full shadow-md bg bg-red-400 text-2xl">
      <div>{error && "Postal Code Not Valid   / " + error}</div>
    </div>
  );
}

export default Error;
