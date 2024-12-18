import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Navbar from "./Navbar"; // Adjust the path as needed
import { Provider } from "react-redux";
import store from "../store"; // Import the store directly
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock the dispatch function from useDispatch
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockToggleLanguage = jest.fn();
const mockHandleDrawerToggle = jest.fn();

// Wrapper component to include necessary context and providers
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
);

describe("Navbar", () => {
  test("renders Navbar and checks if elements are displayed", () => {
    render(
      <Wrapper>
        <Navbar
          handleDrawerToggle={mockHandleDrawerToggle}
          isSmallScreen={false}
          toggleLanguage={mockToggleLanguage}
        />
      </Wrapper>
    );

    // Check if elements are rendered
    expect(screen.getByText(/Welcome Ahmed/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /English/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /notifications/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /messages/i })
    ).toBeInTheDocument();
  });

  test("clicking on the avatar opens the menu", async () => {
    render(
      <Wrapper>
        <Navbar
          handleDrawerToggle={mockHandleDrawerToggle}
          isSmallScreen={false}
          toggleLanguage={mockToggleLanguage}
        />
      </Wrapper>
    );

    const avatar = screen.getByAltText("User Avatar");
    fireEvent.click(avatar);

    // Check if the menu appears
    await waitFor(() => screen.getByRole("menu"));
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  test("clicking on the logout button triggers logout functionality", async () => {
    render(
      <Wrapper>
        <Navbar
          handleDrawerToggle={mockHandleDrawerToggle}
          isSmallScreen={false}
          toggleLanguage={mockToggleLanguage}
        />
      </Wrapper>
    );

    // Open the menu
    const avatar = screen.getByAltText("User Avatar");
    fireEvent.click(avatar);

    // Click on the logout button
    const logoutButton = screen.getByText(/logout/i);
    fireEvent.click(logoutButton);

    // Check if logout was triggered
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({ type: "auth/logout" }); // Ensure this matches your logout action
  });

  test("checks language toggle button functionality", () => {
    render(
      <Wrapper>
        <Navbar
          handleDrawerToggle={mockHandleDrawerToggle}
          isSmallScreen={false}
          toggleLanguage={mockToggleLanguage}
        />
      </Wrapper>
    );

    // Check if the language toggle button is present and clickable
    const languageButton = screen.getByRole("button", { name: /English/i });
    fireEvent.click(languageButton);

    // Check if toggleLanguage was called
    expect(mockToggleLanguage).toHaveBeenCalled();
  });
});
