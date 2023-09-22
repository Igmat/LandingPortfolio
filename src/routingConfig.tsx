import App from "./App";
import { NewCasePage } from "./pages/CasePage";
import { Home } from "./pages/Home";

export const routing = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/case/:mycase', element: <NewCasePage /> },
      { path: '/LandingPortfolio', element: <Home /> },
    ]
  },
]