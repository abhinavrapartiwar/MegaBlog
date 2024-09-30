import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,Route,createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } 
from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {AuthLayout,Login} from './components/index.js'
import Home from './pages/Home.jsx'
import AddPost from './pages/AddPost'
import Signup from './pages/Signup.jsx'
import EditPost from './pages/EditPost.jsx'

import Post from './pages/Post.jsx'

import AllPosts from './pages/AllPosts.jsx'



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />} >
//        <Route path='login' element={<Login />} />
//        <Route path='signup' element={<Signup />} />
//        <Route path='add-post' element={<PostForm />} />
//     </Route>
//   )
// )

const router =  createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path: "/login",
        element:(
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element:(
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path:"/all-posts",
        element:(
           <AuthLayout authentication>
            {" "}
            <AllPosts />
           </AuthLayout>
        ),
      },

      {
        path: "/add-post",
        element:(
          <AuthLayout authentication={true}>
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path:"edit-post/:slug",
        element: (
          <AuthLayout authentication>
              {" "}
              <EditPost />
          </AuthLayout>
      ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
    },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
