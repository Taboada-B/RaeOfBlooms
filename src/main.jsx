import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./app.jsx";

// Importing pages
import About from "./pages/about";
import Contact from "./pages/contact.jsx";
import ErrorPage from "./pages/errorPage";
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import Services from "./pages/services";

// Defining accessible routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about", 
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
