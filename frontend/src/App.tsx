import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import rstyles from "./components/styles/Responsive.module.css";

import Ticket from "./components/Ticket";
import Tickets from "./components/Tickets";

const App: React.FC = () => {
  return (
    <Router>
      <div className={rstyles.container}>
        <Routes>
          <Route path="/" element={<Tickets />} />
          <Route path="/:id" element={<Ticket />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
