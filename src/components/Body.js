import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './LoginPage'
import Browser from './Browser'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage/>
        },
        {
            path: "/browser",
            element: <Browser/>
        }
    ])
  return (
      <div>
          <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
