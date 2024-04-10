import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./Pages/Shop"
import Nav from "./components/Nav"
import Home from "./Pages/Home"
import Adopt from "./Pages/Adopt"
import ShopDetails from "./components/ShopDetails"
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import Verify from "./Auth/Verify"
import Protected from "./Auth/Protected"
import Dashboard from "./Dashboard/Dashboard"
import { ViewProvider } from "./Context/ViewContext"
import AdoptDetail from "./components/AdoptDetail"
import Cart from "./Pages/Cart"


function App() {


  return (
    <>
      <ViewProvider>
        <BrowserRouter>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/" element={<Nav />} >
              <Route index element={<Home />} />
              <Route path="shop" element={<Protected><Shop /></Protected>} />
              <Route path="adopt" element={<Protected><Adopt /></Protected>} />
              <Route path="shopdetail" element={<Protected><ShopDetails /></Protected>} />
              <Route path="adoptdetail" element={<Protected><AdoptDetail /></Protected>} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="verify" element={<Verify />} />
            </Route>
            <Route path="cart" element={<Protected><Cart /></Protected>} />
          </Routes>
        </BrowserRouter>
      </ViewProvider>
    </>
  )
}

export default App
