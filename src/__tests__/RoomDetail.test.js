import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, cleanup, fireEvent, getByTestId } from "@testing-library/react";
import RoomDetail from "../views/Room_detail";
import AuthContextProvider from "../contexts/AuthContext";
import { RequestProvider } from "../contexts/RequestContext";

beforeEach(() => cleanup);

describe("<RoomDetail/>", () => {
  it("should render RoomDetail", () => {
    render(
      <AuthContextProvider>
        <Router>
          <RequestProvider>
            <RoomDetail />
          </RequestProvider>
        </Router>
      </AuthContextProvider>
    );
    expect(<RoomDetail />).toBeDefined();
  });
  it("should display image on click event", () => {
    const props = {
      images: ["testImage1.fake", "testImage2.fake", "testImage3.fake"],
    };
    const { getAllByTestId } = render(
      <AuthContextProvider>
        <Router>
          <RequestProvider>
            <RoomDetail />
          </RequestProvider>
        </Router>
      </AuthContextProvider>
    );
    const imageDiv = getAllByTestId("image");
    const handleClick = jest.fn();

    fireEvent.click(imageDiv[0]);
    handleClick();
    expect(handleClick).toBeCalledTimes(1);
  });
  it("should click event ", () =>{
     const {getByTestId} = render(
      <AuthContextProvider>
      <Router>
        <RequestProvider>
          <RoomDetail />
        </RequestProvider>
      </Router>
    </AuthContextProvider>
     )
     const btn = getByTestId ('btn');

      const roomChangeData = jest.fn();
      fireEvent.click(btn);
      roomChangeData();
      expect(roomChangeData).toBeCalledTimes(1);
  })
});
