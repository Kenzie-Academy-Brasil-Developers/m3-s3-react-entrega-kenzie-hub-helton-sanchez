
import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes";
import Reset from "./styles/reset";
import GlobalStyled from "./styles/global";

function App() {

  return (
    <>
      <Reset />
      <GlobalStyled />
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
