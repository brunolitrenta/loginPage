import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginPage } from './pages/loginPage/loginPage';
import LoggedPage from './pages/secondaryPage/secondaryPage';
import { ChoiceContextProvider } from './hooks/choiceContext.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <LoggedPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChoiceContextProvider>
      <RouterProvider router={router} />
    </ChoiceContextProvider>
  </React.StrictMode>,
)
