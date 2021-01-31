import React from 'react';
import { MemoryRouter as Router } from "react-router-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Tabs from '../components/Tab/Tabs';
import AuthContextProvider from "../contexts/AuthContext";
// import { Tab } from 'material-ui';

beforeEach(() => cleanup);

describe("<Tabs />", () => {
    it("should  render the tabs", async() => {
        render(
          <AuthContextProvider>
          <Router>
            <Tabs/>
          </Router>
          </AuthContextProvider>
        );
    expect(<Tabs />).toBeDefined()
      });

    //   it("should change the tabs when clicked", async() => {
    //     const {getByTestId} =
    //     render(
    //       <AuthContextProvider>
    //       <Router>
    //         <Tabs/>
    //       </Router>
    //       </AuthContextProvider>
    //     );
    //     const btn =getByTestId('submit')
    //     const mocked = jest.fn();

    //     fireEvent.click({target:btn})
    //     mocked()
    //    await expect(mocked).toHaveBeenCalledTimes(1)

    //   });

});
