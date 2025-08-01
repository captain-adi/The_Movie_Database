
import { createBrowserRouter } from "react-router-dom";
import App from '@/App'
import Dashboard from "@/pages/Dashboard/Dashboard";
import DetailsPage from "@/pages/DetailsPage/DetailsPage";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{
      path : "/",
       element : <Dashboard/>
    },{
      path: "/:category/:id",
      element: <DetailsPage/>
    }]
  },
  
]);