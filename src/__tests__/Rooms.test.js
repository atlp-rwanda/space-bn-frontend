import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import {
  render,
  cleanup,
  fireEvent,
  getByTestId,
} from "@testing-library/react";
import Rooms from "../views/Rooms";
import AuthContextProvider from "../contexts/AuthContext";
import { RequestProvider } from "../contexts/RequestContext";

beforeEach(() => cleanup);

describe("<Rooms/>", () => {
  it("should render Rooms", () => {
    render(
      <AuthContextProvider>
        <Router>
          <RequestProvider>
            <Rooms />
          </RequestProvider>
        </Router>
      </AuthContextProvider>
    );
    expect(<Rooms />).toBeDefined();
  });
  it("should  firevent for check in", () => {
    const { getByLabelText } = render(
      <AuthContextProvider>
        <Router>
          <RequestProvider>
            <Rooms />
          </RequestProvider>
        </Router>
      </AuthContextProvider>
    );
    const checkinput = getByLabelText("Check In");
    const handleChange = jest.fn();
    fireEvent.change(checkinput, { target: { value: "2020-12-21" } });
    handleChange();
    expect(handleChange).toBeCalledTimes(1);
  });
  it("should  firevent for check out", () => {
    const { getByLabelText } = render(
      <AuthContextProvider>
      <Router>
        <RequestProvider>
          <Rooms />
        </RequestProvider>
      </Router>
    </AuthContextProvider>
    );
    const checkinput = getByLabelText("Check Out");
    const handleChange = jest.fn();
    fireEvent.change(checkinput, { target: { value: "2021-02-04" } });
    handleChange();
    expect(handleChange).toBeCalledTimes(1);
  });
});
