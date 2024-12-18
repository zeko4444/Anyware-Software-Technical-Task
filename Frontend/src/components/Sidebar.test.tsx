import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@testing-library/jest-dom";

// Utility to render with theme
const renderWithTheme = (ui: React.ReactElement) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("Sidebar Component", () => {
  const mockHandleDrawerToggle = jest.fn();

  const renderSidebar = (props: Partial<SidebarProps> = {}) => {
    const defaultProps: SidebarProps = {
      open: true,
      handleDrawerToggle: mockHandleDrawerToggle,
      ...props,
    };

    return renderWithTheme(<Sidebar {...defaultProps} />);
  };

  it("renders all menu items", () => {
    renderSidebar();

    const menuItems = [
      "Dashboard",
      "Schedule",
      "Courses",
      "Gradebook",
      "Performance",
      "Announcements",
    ];

    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("toggles the drawer state", () => {
    renderSidebar();

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    expect(mockHandleDrawerToggle).toHaveBeenCalledTimes(1);
  });

  it("highlights the active menu item", () => {
    renderSidebar();

    const activeMenuItem = screen.getByText("Dashboard");
    fireEvent.click(activeMenuItem);

    expect(activeMenuItem).toHaveStyle("background-color: white");
    expect(activeMenuItem).toHaveStyle("color: #178596");
  });

  it("renders compact view when closed", () => {
    renderSidebar({ open: false });

    const coligoText = screen.queryByText("Coligo");
    expect(coligoText).not.toBeInTheDocument();
  });
});
