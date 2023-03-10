import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Main from "./component/Main";
import Layout from "./component/Layout";
import Album from "./pages/Album";
import Search from "./component/Search";
import SearchResults from "./component/SearchResults";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: <Main /> },
            {
                path: "album/:albumId",
                element: <Album />,
            },
            {
                path: "search/:searchId",
                element: <SearchResults />,
            },
        ],

    },
    // {
    //     path: "/album",
    //     element: <Album/>
    // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
