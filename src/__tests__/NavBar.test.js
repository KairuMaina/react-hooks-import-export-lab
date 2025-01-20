import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";  // Import screen for queries
import NavBar from "../components/NavBar";  // Default import

test("should render the NavBar component", () => {
  render(<NavBar />);  // Render the NavBar component

  // Check if the 'Home' text is present in the document
  expect(screen.getByText("Home")).toBeInTheDocument();
});
