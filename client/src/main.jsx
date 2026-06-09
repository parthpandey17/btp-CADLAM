import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@/styles/globals.css";
import { RouterProvider } from "@/compat/router";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </React.StrictMode>
)
