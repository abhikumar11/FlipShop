import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Shipping from "./components/Shipping";
import Payment from "./components/Payment";
import Order from "./components/Order";
function App() {
     return (
          <BrowserRouter>
               <Header />
               <main className="my-3">
                    <Container>
                         <Routes>
                              <Route path="/" element={<Home />} exact />
                         </Routes>
                         <Routes>
                              <Route
                                   path="/product/:id"
                                   element={<ProductDetail />}
                              />
                         </Routes>
                         <Routes>
                         <Route path="/cart/:id?" element={<Cart/>} />
                         </Routes>
                         <Routes>
                         <Route path="/login" element={<Login/>}/>
                         </Routes>
                         <Routes>
                         <Route path="/register" element={<Register/>}/>
                         </Routes>
                         <Routes>
                         <Route path="/profile" element={<Profile/>}/>
                         </Routes>
                         <Routes>
                         <Route path="/shipping" element={<Shipping/>}/>
                         </Routes>
                         <Routes>
                              <Route path="/payment" element={<Payment/>}/>
                         </Routes>
                         <Routes>
                              <Route path="/placeorder" element={<Order/>}/>
                         </Routes>
                    </Container>
               </main>
               <Footer />
          </BrowserRouter>
     );
}

export default App;
