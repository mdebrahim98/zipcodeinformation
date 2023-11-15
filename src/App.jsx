// App.js
import React from "react";
import Information from "./components/Information";
import PostalForm from "./components/PostalForm";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info);
  return (
    <div className="flex flex-col min-h-screen">
      <header className=" bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-semibold">Zip Code Information</h1>
      </header>
      <main className="container mx-auto p-4 flex-grow">
        <PostalForm />
        <hr className=" my-5" />
        {info.error.length > 0 && <Error error={info.error} />}
        {info.loading && <Loading />}
        {!info.loading && info.error.length <= 0 && info.data.length > 0 && (
          <Information data={info.data} />
        )}
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center">
        &copy; 2023 My App
      </footer>
    </div>
  );
}

export default App;
