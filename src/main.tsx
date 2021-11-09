import React from "react";
import ReactDOM from "react-dom";
import routesConfig from "@/routes";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>{renderRoutes(routesConfig)}</BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
