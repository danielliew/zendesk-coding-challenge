import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Button from "../components/Button";

describe("button component", () => {
  it("displays the text passed to it", () => {
    const t = "i am a button";
    render(<Button text={t} />);
    expect(screen.getByText(t)).toBeInTheDocument();
  });

  it("performs the onclick function when clicked", async () => {
    const t = "test";
    const t1 = "hi";
    console.log = jest.fn();
    render(<Button text={t} onClick={() => console.log(t1)} />);
    fireEvent.click(screen.getByText(t));
    expect(console.log).toHaveBeenCalledWith(t1);
  });
});
