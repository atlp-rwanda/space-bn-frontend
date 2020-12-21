import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, cleanup, fireEvent, getByTestId } from "@testing-library/react";
import Accommadation from "../views/Accommadation";
import AuthContextProvider from "../contexts/AuthContext";

beforeEach(() => cleanup);

describe("<Accommadation/>", () => {
  const filterHoter = jest.fn();
  const handleSearch = () => filterHoter();
  it("should render search bar", () => {
    const {getByTestId} = render(
      <AuthContextProvider>
        <Router>
          <Accommadation />
        </Router>
      </AuthContextProvider>
    );
    
    const input = getByTestId('search');
    fireEvent.change(input, {target: {value: "test value"}})
    handleSearch()
    expect(filterHoter).toBeCalledTimes(1);
    expect(input).toHaveValue('test value');

  });
});
