import React, { useState } from "react";


export const RequestContext = React.createContext();

export const RequestProvider = ({ children }) => {
 

  const initialCheckin = new Date();
  const roomData = {
    name: "Room#1",
    price: 300,
    type: "single",
    images: [],
    description: "ggggg",
    hotelId: 1,
  };
  const initialGuest = 1;
  const [checkin, setcheckin] = useState(initialCheckin.toISOString());
  const [checkout, setcheckout] = useState(initialCheckin.toISOString());
  const [room, setroom] = useState(roomData);
  const [guest, setGuest] = useState(initialGuest);
  const optionChangeCheckin = (value) => {
    setcheckin(value);
  };
  const optionChangeCheckout = (value) => {
    setcheckout(value);
  };
  const roomChangeData = (data) => {
    setroom(data);
  };
  const guestChange = (data) => {
    setGuest(data);
  };
  return (
    <RequestContext.Provider
      value={{
        checkin,
        optionChangeCheckin,
        checkout,
        hotelId: room.hotelId,
        optionChangeCheckout,
        roomName: room.name,
        roomPrice: room.price,
        roomType: room.type,
        hotelName: room.hotel,
        images: room.images,
        roomChangeData,
        guest,
        guestChange,
        description:room.description,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};
