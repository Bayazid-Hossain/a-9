import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,} from "react-router-dom";
import Router from './Routers/Routers';
import { DataProvider } from './Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
    <RouterProvider router={Router}></RouterProvider>
    </DataProvider>
  </React.StrictMode>,
)
