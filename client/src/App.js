import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
     return (
          <>
               <Header />
               <main>
                    <Container>
                         <h1>Flip Shop</h1>
                         <Home />
                    </Container>
               </main>
               <Footer />
          </>
     );
}

export default App;