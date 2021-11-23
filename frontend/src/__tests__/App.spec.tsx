import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("smoke test", () => {
  it("renders initial tickets page", () => {
    render(<App />);
    expect(screen.getByText("Zendesk Tickets")).toBeInTheDocument();
  });
});
