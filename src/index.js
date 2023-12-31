import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/ErrorPage/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import BlogPage, { postsLoader } from './components/BlogPage/BlogPage';
import BlogPost, { loader as blogPostLoader } from './components/BlogPost/BlogPost';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blog',
        element: <BlogPage />,
        loader: postsLoader
      },
      {
        path: '/blog/:id',
        element: <BlogPost />,
        loader: blogPostLoader
      }
    ]
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
