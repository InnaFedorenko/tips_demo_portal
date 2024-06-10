// src/App.jsx
//purpose: The main App component for the application
import './App.css';
// Import the Navbar component and the Outlet component from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

// Define the main App component
function App() {
  return (
    <>
      <Navbar/>
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
