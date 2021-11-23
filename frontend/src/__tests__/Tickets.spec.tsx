import React from "react";
import { render, screen } from "@testing-library/react";
import Tickets from "../components/Tickets";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("tickets component", () => {
  it("renders a list of tickets", async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tickets />} />
        </Routes>
      </BrowserRouter>
    );
    const tickets = await screen.findAllByTestId("ticket");
    expect(tickets).toHaveLength(25);
  });
});
