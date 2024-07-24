import "./styles.css";
import Main from "./Main/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/login";

export default function App() {
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
