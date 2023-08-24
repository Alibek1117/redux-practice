import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
// import Main from "./components/Main";
// import Login from "./components/Login";
// import Register from "./components/Register";
import {Main, Login, Register} from './components'

function App() {
 
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route index element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
