import "./App.css";
import { Dashboard } from "./components/notification-dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UpdateNotice } from "./components/update-notice/UpdateNotice";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/update-notice" element={<UpdateNotice />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
