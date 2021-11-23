import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Ticket from "../components/Ticket";

describe("ticket component", () => {
  it("renders the ticket details", async () => {
    render(
      <MemoryRouter initialEntries={["/1"]}>
        <Routes>
          <Route path="/:id" element={<Ticket />} />
        </Routes>
      </MemoryRouter>
    );
    expect(await screen.findByTestId("ticket-subject")).toBeInTheDocument();
    expect(await screen.findByTestId("ticket-desc")).toBeInTheDocument();
  });
});
