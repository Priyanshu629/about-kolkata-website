import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import PlacesToVisit from './components/PlacesToVisit.jsx'
import FamousFood from './components/FamousFood.jsx'
import ContactUs from './components/ContactUs.jsx'

const appRouter= createBrowserRouter([

  {
   path:"/",
   element:<App/>,
   children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/places-to-visit",
      element:<PlacesToVisit/>
    },
    {
      path:"/famous-food",
      element:<FamousFood/>
    },
    {
      path:"/contact-us",
      element:<ContactUs/>
    },
   ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
