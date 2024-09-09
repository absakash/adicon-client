import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import MainLayout from "../layout/MainLayout"
import Contact from "../components/contact/Contact";
import Services from "../components/services/Services";
import ServicesDetails from "../components/services/ServicesDetails";
import ProjectsDetails from "../components/home/ProjectsDetails";
import Register from "../components/logReg/Register";
import About from "../components/about/About";
import Deb from "../components/home/expertizeInfo/Deb";
import Akash from "../components/home/expertizeInfo/Akash";
const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/servicesdetails',
                element:<ServicesDetails></ServicesDetails>
            },
            {
                path:'/projectsdetails',
                element:<ProjectsDetails></ProjectsDetails>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path: "/details/deb",
                element:<Deb></Deb>
            },
            {
                path: "/details/akash",
                element:<Akash></Akash>
            },
            {
                path:'/servicedetails/:id',
                element:<ServicesDetails></ServicesDetails>
            },
            {
                path:'*',
                element:<div>not yet found ............</div>
            }
        ]
    }
])

export default router;