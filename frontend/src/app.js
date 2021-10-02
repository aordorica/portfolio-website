import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <AppRouter />
    </ThemeProvider>,
    document.getElementById("app")
);
