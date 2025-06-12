import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Todos } from "../pages/Todos/Todos";
import { Layout } from "../components/LayoutComponent/Layout";

// createBrowserRouter giúp chúng ta kết nối những routing
const appRouter = createBrowserRouter([
  // {} mỗi item này là mỗi cái trang
  // element là toàn bộ file code
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "todo",
        element: <Todos />,
      },
    ],
  },
]);

export default appRouter;
