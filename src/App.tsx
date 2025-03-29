import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tips from "./components/Tips";
import { Challenges } from "./components/Challenges";
import Solutions from "./components/Solutions";
import Tools from "./components/Tools";
import FAQs from "./components/FAQs";
import Support from "./components/Support";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app background-image">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
