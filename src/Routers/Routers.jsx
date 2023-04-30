import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Statistics from "../pages/Statistics";
import AppliedJobs from "../pages/AppliedJobs";
import JobDetails from "../pages/JobDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";


const Router = createBrowserRouter([
  
    {
        path: "/",
        element: <App />,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home/>,               
            },        

            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/statistics",
                element: <Statistics/>,
                loader:() => fetch('assignmentMarks.json')
            },
            {
                path: "/applied-jobs",
                element: <AppliedJobs/>
            },
            {
                path:'/jobdetails/:id',
                element:<JobDetails></JobDetails>,
                loader:() => fetch('featured.json')
            },
           
        ]
    }

]);
export default Router;