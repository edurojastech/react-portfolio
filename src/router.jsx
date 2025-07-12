import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <> PAGINA NAO ENCONTRADA! </>,
  },
])

export default routers