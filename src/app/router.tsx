import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { HomePage } from "./routes/home";

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "*",
      element: (
        <div className="p-6 text-center text-red-500">Page not found</div>
      ),
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(), [queryClient]);

  return <RouterProvider router={router} />;
};
