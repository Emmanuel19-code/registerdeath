import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./screens/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
]);
