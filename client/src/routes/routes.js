import React from "react"; // , { lazy, Suspense }

import {
  // Navigate,
  useRoutes,
  // useLocation
} from "react-router-dom";

//auth
import SignIn from "../pages/signIn/SignIn";
import Register from "../pages/register/Register";

// ----------------------------------------------------------------------

export const Router = () => {
  const roleType = "user";

  return useRoutes([
    // {
    //   path: "auth",
    //   children: [
    //     {
    //       path: "login",
    //       element: <SignIn />,
    //       // element: (
    //       //   <GuestGuard>
    //       //     <Customer />
    //       //   </GuestGuard>
    //       // )
    //     },
    //   ], 
    // },
    {
      // path: 'dashboard',
      // element: <SignIn />,
      // element: (
      //   <AuthGuard>
      //     <DashboardLayout />
      //   </AuthGuard>
      // ),

      children: [
        { path: "/", element: <SignIn/> },
        { path: "/register", element: <Register/> },
        { path: "/main", element: <h1>test main page</h1> },
        // { path: "/", element: <Navigate to="/dashboard/app" replace /> },
        {
          path: "dashboard",
          // children: [{ path: 'app', element: <NotFound /> }]

          children: [
            {
              path: "app",
              element:
                roleType === true ? (
                  <h1>sp dashboard</h1>
                ) : (
                  <h1>sp dashboard</h1>
                ),
            },
          ],
        },
        {
          path: "property",
          children: [{ path: "edit-property", element: <h1>Property</h1> }],
        },
      ],
    },

    { path: "*", element: <h1>Not Found</h1> },
  ]);
};

// ----------------------------------------------------------------------lazy components
// Property module

// const CareersListPage = Loadable(lazy(() => import("../pages/career/List")));
// const AddCareerPage = Loadable(lazy(() => import("../pages/career/Add")));
// const EditCareerPage = Loadable(lazy(() => import("../pages/career/Edit")));
