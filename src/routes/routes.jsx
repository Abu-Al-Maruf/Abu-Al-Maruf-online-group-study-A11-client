import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <App></App>,
      },
    ],
  },
]);

export default router;
