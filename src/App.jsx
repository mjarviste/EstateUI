import HomePage from './routes/homePage/homePage';
import ListPage from './routes/listPage/listPage';
import Layout from './routes/layout/layout';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SinglePage from './routes/singlePage/singlePage';
import LoginPage from './routes/loginPage/loginPage';
import ProfilePage from './routes/profilePage/profilePage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout/>
      ),
      children: [
        {
          path: "/",
          element: (
            <HomePage/>
          )
        },
        {
          path: "/list",
          element: (
            <ListPage/>
          )
        },
        {
          path: "/:id",
          element: (
            <SinglePage/>
          )
        },
        {
          path: "/profile",
          element: (
            <ProfilePage/>
          )
        },
        {
          path: "/login",
          element: (
            <LoginPage/>
          )
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
