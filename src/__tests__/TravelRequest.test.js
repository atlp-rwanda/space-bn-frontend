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
jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));
beforeEach(() => cleanup);

describe("<TravelRequest/>", () => {
    it("should render TravelRequest", async() => {
      localStorage.setItem('userData', JSON.stringify({
        firstname: 'John',
        lastname: 'Doe'
      }))
      const props ={
        match: {
          params: {
            reqId:1,
            hotelId: 1
          }
        }
      }
        const {getByTestId} =render(
          <AuthContextProvider>
          <Router>
          <RequestProvider>
            <TravelRequest {...props} />
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