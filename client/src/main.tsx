import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
//
import Default from "./design/layouts/Default";
import App from "./App";
import Auth from "./views/Auth";
import Landing from "./views/Landing";
import Privacy from "./views/Privacy";
import ErrorPage from "./views/ErrorPage";
import Dashboard from "./views/Dashboard";
import Register from "./views/Register";
import Activities from "./views/Activities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user/join",
    element: <Register />,
  },
  {
    path: "/user/login",
    element: <Auth />,
  },
  {
    path: "/docs/user_privacy",
    element: <Privacy />,
  },
  {
    path: "/activities",
    element: <Activities />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function Main() {
  return (
    <Default>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={true}
      />
    </Default>
  );
}

const container = document.getElementById("root");
if (container !== null) {
  const root = ReactDOM.createRoot(container);
  root.render(
    // <React.StrictMode>
    <Main />
    // </React.StrictMode>
  );
} else {
  console.error("The root container element not found!");
}
