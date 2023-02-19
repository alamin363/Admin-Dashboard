import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "Router/Router";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
         <CssBaseline /> 
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
