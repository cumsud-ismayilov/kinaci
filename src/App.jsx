import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import { FavoriteProvider } from "./context/favoriteContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {  BackToTopMotion  } from "./components/backToTopMotion/backToTopMotion";

function App() {
  return (
    <FavoriteProvider>
      <RouterProvider router={routers} />
      <ToastContainer position="top-right" autoClose={2000} />
      <BackToTopMotion/>
    </FavoriteProvider>
  );
}

export default App;
