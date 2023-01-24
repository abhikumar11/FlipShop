import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
     return (
          <BrowserRouter>
                    <Header />
                    <main className="my-3">
                         <Container>
                              <h1>Flip Shop</h1>
                              <Routes>
                                   <Route path="/" element={<Home />} exact />
                              </Routes>
                         </Container>
                    </main>
                    <Footer />
               
          </BrowserRouter>
     );
}

export default App;
