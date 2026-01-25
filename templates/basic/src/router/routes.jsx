import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../layout/RootLayout";
import Demo from "../Demo/Demo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {
        index: true,
        element: <Demo />,
      }
    ]
  },
]);