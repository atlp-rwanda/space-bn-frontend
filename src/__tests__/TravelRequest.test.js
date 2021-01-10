import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TravelRequest from "../views/TravelRequest";
import AuthContextProvider from "../contexts/AuthContext"
import {RequestProvider} from '../contexts/RequestContext';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    })
}));

beforeEach(() => cleanup);

describe("<TravelRequest/>", () => {
    it("should render TravelRequest", async() => {
        const {getByTestId} =render(
          <AuthContextProvider>
          <Router>
          <RequestProvider>
            <TravelRequest />
          </RequestProvider>
          </Router>
          </AuthContextProvider>
        );
        const btn =getByTestId('submit')
        const mocked = jest.fn();

        fireEvent.click(btn)
        mocked()
       await expect(mocked).toHaveBeenCalledTimes(1)
       
      });
});