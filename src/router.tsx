import {createBrowserRouter} from "react-router-dom";
import Login from "@/routes/(auth)/Login";

const router = createBrowserRouter([
  {path: "/"},
  {path: "/", children: [{path: "login", element: <Login/>}]},
]);

export default router;
