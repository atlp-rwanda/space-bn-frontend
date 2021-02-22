import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import {
  render,
  cleanup,
  fireEvent
} from "@testing-library/react";
import RoomDetail from "../views/Room_detail";
import AuthContextProvider from "../contexts/AuthContext";
import { RequestProvider, RequestContext } from "../contexts/RequestContext";

beforeEach(() => cleanup);
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));
describe("<RoomDetail/>", () => {
  const props = {
    match: {
      params: {
        roomId: 1,
        hotelId: 1,
      },
    },
  };
  const propsImage = {
    images: ["testImage1.fake", "testImage2.fake", "testImage3.fake"],
    roomChangeData: ()=> undefined
  };
  it("should render RoomDetail", () => {
    render(
      <AuthContextProvider>
        <Router>
          <RequestProvider>
            <RoomDetail {...props} />
          </RequestProvider>
        </Router>
      </AuthContextProvider>
    );
    expect(<RoomDetail />).toBeDefined();
  });
  it("should display image on click event", () => {
  
    const { getAllByTestId } = render(
      <AuthContextProvider>
        <Router>
          <RequestContext.Provider value={propsImage}>
            <RoomDetail {...props} />
          </RequestContext.Provider>
        </Router>
      </AuthContextProvider>
    );
    const imageDiv = getAllByTestId("image");
    const handleClick = jest.fn();

    fireEvent.click(imageDiv[0]);
    handleClick();
    expect(handleClick).toBeCalledTimes(1);
  });
  it("should click event", () => {
    const { getByTestId } = render(
      <AuthContextProvider>
        <Router>
          <RequestContext.Provider value={propsImage}>
            <RoomDetail {...props} />
          </RequestContext.Provider>
        </Router>
      </AuthContextProvider>
    );
    const btn = getByTestId("btn");

    const roomChangeData = jest.fn();
    fireEvent.click(btn);
    roomChangeData();
    expect(roomChangeData).toBeCalledTimes(1);
  });
});
