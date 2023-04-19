import { useState } from "react";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes";

function App() {

  return (
    <>
      <AppRoutes />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
