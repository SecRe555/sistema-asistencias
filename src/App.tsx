import {RouterProvider} from "react-router-dom";
import router from "@/router";
import {ThemeProvider} from "@mui/material";
import tema from "@/theme.ts";

function App() {
  return (
    <>
      <ThemeProvider theme={tema}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  );
}

export default App;
