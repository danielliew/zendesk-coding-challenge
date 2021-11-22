import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ticket from "./components/Ticket";
import Tickets from "./components/Tickets";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tickets />} />
        <Route path="/:id" element={<Ticket />} />
      </Routes>
    </Router>
  );
};

export default App;
