import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Ticket from "../components/Ticket";
import Tickets from "../components/Tickets";

describe("ticket component", () => {
  it("renders the ticket details", async () => {
    render(
      <MemoryRouter initialEntries={["/1"]}>
        <Routes>
          <Route path="/:id" element={<Ticket urlPath="ticket" />} />
        </Routes>
      </MemoryRouter>
    );
    expect(await screen.findByTestId("ticket-subject")).toBeInTheDocument();
    expect(await screen.findByTestId("ticket-desc")).toBeInTheDocument();
  });

  it("navigates to all tickets when back button is pressed", async () => {
    render(
      <MemoryRouter initialEntries={["/1"]}>
        <Routes>
          <Route path="/:id" element={<Ticket urlPath="ticket" />} />
          <Route path="/" element={<Tickets urlPath="tickets" />} />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.click(await screen.findByText("Back to all tickets"));
    expect(await screen.findByText("Zendesk Tickets"));
  });

  it("shows a loading message when loading", async () => {
    render(
      <MemoryRouter initialEntries={["/1"]}>
        <Routes>
          <Route path="/:id" element={<Ticket urlPath="ticket" />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByTestId("ticket-subject")).toBeInTheDocument();
  });

  it("shows an error message when API is unavailable", async () => {
    render(
      <MemoryRouter initialEntries={["/1"]}>
        <Routes>
          <Route path="/:id" element={<Ticket urlPath="err-ticket" />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/oops/i));
  });
});
