import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

// Application Components
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Cart from "./components/Cart";
import Movies from "./pages/Movies";

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm((prevState) => !prevState);

  return (
    <>
      {/* Navbar with Form toggle */}
      <AppNavbar toggleForm={toggleForm} showForm={showForm} />

      {/* Welcome Section */}
      <Container className="my-5">
        <Card className="text-center p-4 bg-light">
          <Card.Body>
            <Card.Title>
              <h1>Welcome to The Generics</h1>
            </Card.Title>
            <Card.Text>Explore our products and shop now!</Card.Text>
          </Card.Body>
        </Card>
      </Container>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Conditional Rendering for Cart */}
      {showForm && <Cart onClose={toggleForm} />}
    </>
  );
}

export default App;
