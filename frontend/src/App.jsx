import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ChefDashboard from "./components/chefDashboard/ChefDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/chef/dashboard" element={<ChefDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
