import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import ContextProvider from '../store/ContextProvider'
import BlogBody from './Pages/Components/BlogBody'
import BlogHeader from './Pages/Components/BlogHeader'
import Footer from './Components/Footer/Footer'

const router=createBrowserRouter([
  {
    path:'/login',
    element:<Login/>,
  },

  {
    path:'/',
    element:<Home/>
  },

  {
    path:'/SignUp',
    element:<SignUp/>
  },

  {
    path:'/addBlog',
    element:
    <div>
      <BlogHeader/>
      <BlogBody/>
      <Footer/>
    </div>
  }
])

function App() {

  return (
    <>
      <ContextProvider>
        <RouterProvider router={router}/>
      </ContextProvider>
    </>
  )
}

export default App
