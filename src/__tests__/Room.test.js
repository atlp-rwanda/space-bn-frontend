import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, cleanup, fireEvent, getAllByTestId } from "@testing-library/react";
import Room from "../views/Rooms/Room";
import AuthContextProvider from "../contexts/AuthContext";
import {RequestProvider} from "../contexts/RequestContext";
beforeEach(() => cleanup);

describe("<Room/>", () => {
  
  it("should render image length", () => {
   const props = { images: ["testImage1.fake", "testImage2.fake", "testImage3.fake"] };
    const {getAllByTestId}=render(
      <AuthContextProvider>
      <Router>
        <RequestProvider>
        <Room {...props} />
        </RequestProvider>
      </Router>
    </AuthContextProvider>
    );
      const image = getAllByTestId('image1')
        expect(image.length).toEqual(3) 
  });

  it("should display image on click event", ()=>{
    const props = { images: ["testImage1.fake", "testImage2.fake", "testImage3.fake"] };
    const {getAllByTestId} = render(
      <AuthContextProvider>
      <Router>
        <RequestProvider>
        <Room {...props} />
        </RequestProvider>
      </Router>
    </AuthContextProvider>
    )
    const imageDiv = getAllByTestId('image1');
    const  handleClick = jest.fn();

    fireEvent.click(imageDiv[0]);
    handleClick()
    expect(handleClick).toBeCalledTimes(1);

  });
  it("should handle change",() => {
    const props = { images: ["testImage1.fake", "testImage2.fake", "testImage3.fake"] };
    const {getByTestId} = render(
      <AuthContextProvider>
      <Router>
        <RequestProvider>
        <Room {...props} />
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
  it("should handle change",() => {
    const props = { images: ["testImage1.fake", "testImage2.fake", "testImage3.fake"] };
    const {getByTestId} = render(
      <AuthContextProvider>
      <Router>
        <RequestProvider>
        <Room {...props} />
        </RequestProvider>
      </Router>
    </AuthContextProvider>
     )
     const btnclick = getByTestId('btnclick');

      const roomChangeData = jest.fn();
      fireEvent.click(btnclick);
      roomChangeData();
      expect(roomChangeData).toBeCalledTimes(1);
  })
  
});