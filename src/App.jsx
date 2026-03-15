import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbars";
import Homepage from "./Homepage";
import ContactPage from "./ContactPage";

function About() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <h1 className="text-5xl font-bold text-black">About Page</h1>
    </div>
  );
}

function FooterPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <h1 className="text-5xl font-bold text-black">Footer Page</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<FooterPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;