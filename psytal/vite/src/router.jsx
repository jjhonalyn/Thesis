import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./views/unauthorized_view/views_main/AboutUs";
import LandingPage from "./views/unauthorized_view/views_main/LandingPage";
import Login from "./views/unauthorized_view/views_main/Login";
import GuestLayout from "./views/unauthorized_view/views_main/GuestLayout";
import DefaultLayout from "./views/authorized_view/views_main/DefaultLayout";
import Home from "./views/authorized_view/views_main/Home";
import Accounts from "./views/authorized_view/views_main/Accounts"
import PreRegistration from "./views/authorized_view/views_main/PreRegistration"
import Links from "./views/authorized_view/views_main/Links";
import AdminLayout from "./views/authorized_view/views_main/AdminLayout";
import Dashboard from "./views/authorized_view/views_main/Dashboard";
import ManageUsers from "./views/authorized_view/views_main/ManageUsers";
import StudentList from "./views/authorized_view/views_components/StudentList";
import EmployeeList from "./views/authorized_view/views_components/EmployeeList";
import PreEnrollment from "./views/authorized_view/views_main/PreEnrollment"
import Classes from "./views/authorized_view/views_main/Classes"
import Curriculum from "./views/authorized_view/views_main/Curriculum"
import StaffLayout from "./views/authorized_view/views_main/StaffLayout";
import InstructorLayout from "./views/authorized_view/views_main/InstructorLayout";

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <AdminLayout />,
        children:[
            {
                path: '',
                element: <Home />
            },

            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'classes',
                element: <Classes />
            },
            {
                path: 'preenrollment',
                element: <PreEnrollment />
            },
            {
                path: 'links',
                element: <Links />
            },

            {
                path: 'manageusers',
                element: <ManageUsers />,
                children:[
                    {
                        path: '',
                        element: <StudentList />
                    },

                    {
                        path: '',
                        element: <EmployeeList />
                    }
                ]
            },
            {
                path: 'curriculum',
                element: <Curriculum />
            },
        ]
    },
    
    {
        path: '/staff',
        element: <StaffLayout />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    },

    {
        path: '/instructor',
        element: <InstructorLayout />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]  
    },
    
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/accounts',
                element: <Accounts />
            },
            
            {
        
                path: 'preregistration',
                element: <PreRegistration />
                
            },
            
            
        ]
    },
    
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/aboutus',
                element: <AboutUs />
            },

            {
                path: '/landingpage',
                element: <LandingPage />
            },

            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router;