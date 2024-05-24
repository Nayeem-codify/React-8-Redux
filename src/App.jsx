import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import RootLayout from "./layouts/RootLayout";


function App() {
  const router = createBrowserRouter(
  createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/blog" element={<Blog/>}/>
    </Route>
  )
);  

  return (
    <RouterProvider router={router} />
  )
}

export default App
