import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginPage from "./components/LoginPage";

//const clientId = "449406799320-flpefl2546s9oto9kkv1ed72innmkdn7.apps.googleusercontent.com"
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        errorElement: <div>404 Not found</div>
    },
    {
        path:'/auth',
        element:<LoginPage />,
        errorElement: <div>404 Not found</div>
    }
]);
root.render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
);


