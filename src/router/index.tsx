import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Home from "../Auth/Home";
import MainLayout from "../Layout/AppLayout";
import Dashboard from "../pages/Dashboard";
import ManageCandidate from "../pages/ManageCandidates";
import ManageEmployer from "../pages/ManageEmployers";
import ManageJobPosts from "../pages/ManagePost";

const Routers: React.FC = () => {
  const paths = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: (
        <MainLayout>
          <Dashboard />
        </MainLayout>
      ),
      // element: <Dashboard />,

    },
    {
      path: "/manage-candidate",
      element: (
        <MainLayout>
          <ManageCandidate />
        </MainLayout>
      ),
    },
    {
      path: "/manage-employer",
      element: (
        <MainLayout>
          <ManageEmployer />
        </MainLayout>
      ),
    },
    {
      path: "/manage-job-post",
      element: (
        <MainLayout>
          <ManageJobPosts />
        </MainLayout>
      ),
    },
  ];
  const routes = useRoutes(paths);
  console.log("Routes rendered:", routes); // Debug log
  return routes
};

export default Routers;
