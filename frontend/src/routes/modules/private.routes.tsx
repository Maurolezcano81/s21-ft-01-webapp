import { lazy } from "react";
import ProtectedRoute from "../ProtectedRoute";
import { ROUTES } from "../routes";

const Dashboard = lazy(() => import("../../pages/Dashboard"));

export const PrivateRoutes = [
  {
    path: ROUTES.DASHBOARD,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  }
]