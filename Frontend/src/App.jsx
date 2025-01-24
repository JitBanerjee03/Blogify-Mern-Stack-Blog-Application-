import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import ContextProvider from '../store/ContextProvider'
import BlogBody from './Pages/Components/BlogBody'
import BlogHeader from './Pages/Components/BlogHeader'
import Footer from './Components/Footer/Footer'
import SingleBlogPost from './Pages/Components/SingleBlogPost'
import UserInfo from './Pages/UserInfo'
import CountryProvider from '../store/CountryProvider'

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
    element:
      <CountryProvider>
        <SignUp/>
      </CountryProvider>
  },

  {
    path:'/addBlog',
    element:
    <div>
      <BlogHeader/>
      <BlogBody/>
      <Footer/>
    </div>
  },

  {
    path:'/singleBlog',
    element:
    <div>
      <BlogHeader/>
      <SingleBlogPost/>
      <Footer/>
    </div>
  },

  {
    path:'/userInfo',
    element:
    <div>
      <BlogHeader/>
      <UserInfo/>
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
