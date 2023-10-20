import './styles/app/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InitialPage from './pages/InitialPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<InitialPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
