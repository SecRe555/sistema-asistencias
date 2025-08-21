import {createBrowserRouter} from "react-router-dom";
import Login from "@/routes/(auth)/Login";
import Registro from "@/routes/(auth)/Registro.tsx";

const router = createBrowserRouter([
  {path: "/"},
  {path: "/", children: [{path: "login", element: <Login/>}, {path: "registro", element: <Registro/>}]},
]);

export default router;
