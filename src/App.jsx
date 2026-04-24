import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h2>🧳 JobBoard NZ</h2>
      </header>

      <main>
        <HomePage />
      </main>

      <footer className="footer">
        <p>Built with React by Aarti — AUT 2026</p>
      </footer>
    </div>
  );
}

export default App;