import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main'
import Home from './components/Home/Home'
import Orders from './components/Orders/Orders'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Review from './components/Review/Review';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('tsharts.json')
      },
      {
        path: '/order',
        element: <Orders></Orders>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path: '/review',
        element: <Review></Review>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
