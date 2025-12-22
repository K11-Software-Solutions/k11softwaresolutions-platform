import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renders the brand/logo", () => {
    render(<Navbar />);
    expect(screen.getByText(/k11/i)).toBeInTheDocument();
  });
});
