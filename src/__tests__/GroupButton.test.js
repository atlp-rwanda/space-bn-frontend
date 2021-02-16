import React from "react";
// import { MemoryRouter as Router } from "react-router-dom";
import {
  render,
  fireEvent,
  getByAltText,
  getByText,
} from "@testing-library/react";
import GroupButton from "../components/GroupButton";
import { RequestProvider } from "../contexts/RequestContext";

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));
describe("<Room/>", () => {
  it("should render group button", () => {
    render(
      <RequestProvider>
        <GroupButton />
      </RequestProvider>
    );
    expect(<GroupButton />).toBeDefined();
  });
  it("should increment when you click", () => {
    const { getByTestId, getByText } = render(
      <RequestProvider>
        <GroupButton />
      </RequestProvider>
    );

    const btn = getByTestId("incr");
    const mocked = jest.fn();

    fireEvent.click(btn);
    mocked();
    expect(mocked).toHaveBeenCalledTimes(1);
  });
  it("should dencrement when you click", () => {
    const { getByTestId } = render(
      <RequestProvider>
        <GroupButton />
      </RequestProvider>
    );
    const btn = getByTestId("decr");

    const mocked = jest.fn();

    fireEvent.click(btn);
    mocked();
    expect(mocked).toHaveBeenCalledTimes(1);
  });
});
