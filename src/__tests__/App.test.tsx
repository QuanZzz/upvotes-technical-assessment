import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { UpvoteContextProvider } from "../context/UpvoteContext"


describe("UpvoteList component", () => {
  beforeEach(() => {
    render(
      <UpvoteContextProvider>
        <App />
      </UpvoteContextProvider>);
  });

  it("render all buttons", () => {
    const btns = screen.getAllByRole("button");
    expect(btns.length).toBe(13);
  });

  it("should change the css class when an upvote item is clicked", () => {
    const btns = screen.getAllByRole("button");
    const firstBtn = btns[0];

    fireEvent.click(firstBtn);
    const firstContainer = screen.getAllByRole('container')[0];
    expect(firstContainer.className.includes('selected')).toBeTruthy();

    fireEvent.click(firstBtn);
    expect(firstContainer.className.includes('selected')).toBeFalsy();
  });
});
