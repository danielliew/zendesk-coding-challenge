import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Tickets from "../components/Tickets";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Ticket from "../components/Ticket";

const page1 = "velit eiusmod reprehenderit officia cupidatat";
const page2 = "ut magna eiusmod magna nostrud";

describe("tickets component", () => {
  it("renders a list of tickets", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Tickets urlPath="tickets" />} />
        </Routes>
      </MemoryRouter>
    );
    const tickets = await screen.findAllByTestId("ticket");
    expect(tickets).toHaveLength(25);
  });

  it("pages correctly", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Tickets urlPath="tickets" />} />
        </Routes>
      </MemoryRouter>
    );
    expect(await screen.findByText(page1)).toBeInTheDocument();
    fireEvent.click(await screen.findByText(/next/i));
    expect(await screen.findByText(page2)).toBeInTheDocument();
    fireEvent.click(await screen.findByText(/back/i));
    expect(await screen.findByText(page1)).toBeInTheDocument();
  });

  it("navigates to ticket details when a ticket is selected", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Tickets urlPath="tickets" />} />
          <Route path="/:id" element={<Ticket urlPath="ticket" />} />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.click(await screen.findByText(page1));
    expect(await screen.findByText("Zendesk Ticket"));
  });

  it("shows a loading message when loading", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Tickets urlPath="tickets" />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(page1));
  });

  it("shows an error message when API is unavailable", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Tickets urlPath="err-tickets" />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/oops/i));
  });
});
