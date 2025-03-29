import { Link } from "react-router-dom";
import "./Home.css"; // Import the separated CSS file

function Home() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <span>🌳</span>
          <span>Rubber Farmer Assistant</span>
        </div>
        <button className="nav-toggle">☰</button>

        <nav id="mainNav" className="nav">
          <Link to="/home">Home</Link>
          <Link to="/tips">Farming Tips</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/support">Contact</Link>
        </nav>
      </header>

      <div className="main-content">
        <section id="home" className="section-content active">
          <div className="hero">
            <h1>Welcome to Rubber Farmer Assistant</h1>
            <p>Your digital companion for successful rubber cultivation</p>
          </div>

          <div className="menu-grid">
            <Link to="/tips">
              <div className="menu-item">
                <div className="menu-icon">🌱</div>
                <h3>Farming Tips</h3>
                <p>Essential information for rubber cultivation</p>
              </div>
            </Link>
            <Link to="/challenges">
              <div className="menu-item">
                <div className="menu-icon">🌤️</div>
                <h3>Climate & Soil</h3>
                <p>Understanding challenges and solutions</p>
              </div>
            </Link>
            <Link to="/solutions">
              <div className="menu-item">
                <div className="menu-icon">💡</div>
                <h3>Solutions</h3>
                <p>
                  Practical advice for common problems
                  <p style={{ visibility: "hidden" }}>.</p>
                </p>
              </div>
            </Link>
            <Link to="/tools">
              <div className="menu-item">
                <div className="menu-icon">🔧</div>
                <h3>Tools</h3>
                <p>Calculators and weather updates</p>
              </div>
            </Link>
            <Link to="/faqs">
              <div className="menu-item">
                <div className="menu-icon">❓</div>
                <h3>FAQs</h3>
                <p>Answers to common farming questions</p>
              </div>
            </Link>
            <Link to="/support">
              <div className="menu-item">
                <div className="menu-icon">✉️</div>
                <h3>Contact Us</h3>
                <p>Ask questions or provide feedback</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
