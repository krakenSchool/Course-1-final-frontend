import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import PostPage from "./components/Postpage";
import { ContactForm } from "./components/ContactUs";
import { AdminPanel } from "./components/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/posts/:slug" element={<PostPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
