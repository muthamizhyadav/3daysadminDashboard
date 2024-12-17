import { useState } from "react";
import { BrowserRouter, Routes, useRoutes } from "react-router-dom";
import Routers from "./router";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
