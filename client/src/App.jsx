// src/App.jsx
//purpose: The main App component for the application
import './App.css';
// Import the Navbar component and the Outlet component from 'react-router-dom'
//import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from "react-router-dom";

// Define the main App component
function App() {
    return (
        <Container fluid className="container-flex">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </Container>
    );
}

export default App;
