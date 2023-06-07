import { createBrowserRouter } from "react-router-dom";
import Shows from "../pages/Shows";
import Summary from "../pages/Summary";
import BookingForm from "../components/BookingForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shows />,
  },
  {
    path: "/summary/:id",
    element: <Summary></Summary>,
  },
  {
    path: "/book/:id",
    element: <BookingForm />,
  },
]);
export default router;
