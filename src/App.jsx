// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./hooks/AppContext";
import HomePage from "./pages/Home";
import Document from "./components/Document";
import ResultPage from "./pages/ResultPage";
const App = () => {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs/:filename" element={<Document />} />
          <Route path="/ResultDnaReport" element={<ResultPage />} />
        </Routes>
      </AppProvider>
    </Router>
  );
};

export default App;