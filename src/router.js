import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import GameDetail from "./view/GameDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <div>Home</div>,
      },
      {
        path: "/games",
        element: <div>Games</div>,
      },
      {
        path: "/games/:gameId",
        element: <GameDetail />,
      },
    ],
  },
]);

export default router;
