import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'		
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import StartingPage from './components/StartingPage'
import Loginpage from './components/Loginpage.jsx'
import Leftside from './components/Leftside.jsx'
import Signup from './components/Signup.jsx'
import Product from './pages/Product.jsx'
import App from './App.jsx'
import Completed from './pages/Completed.jsx'

const Router = createBrowserRouter([
	{
		path:'/',
		element:<StartingPage/>
	},
	{
		path:'/land',
		element:<LandingPage/>
	},
	{
		path:'/login',
		element:<Loginpage/>
	},
	{
		path:'/signup',
		element:<Signup/>
	},
	{
		path:'/leftside',
		element:<Leftside/>,
		children:[
			{
				path:'/leftside/',
				element:<Dashboard/>
			},
			{
				path:'/leftside/product',
				element:<Product/>
			},
			{
				path:'/leftside/completed',
				element:<Completed/>
			}
		]
	}
])
ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={Router}/>
)