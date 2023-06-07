import { createBrowserRouter } from "react-router-dom";
import Users from "../pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
]);
export default router;
