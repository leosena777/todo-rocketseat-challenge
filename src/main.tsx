import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TasksProvider } from "./contexts/tasks.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>
);
