import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider,} from "react-router";
import Dashboard from './components/Dashboard.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

let router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: "/dashboard", element: <Dashboard/>},
  {path: "*", element: <NotFoundPage/>},
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
