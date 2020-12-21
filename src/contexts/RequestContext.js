import React,{useState} from 'react'

export const RequestContext =  React.createContext();

export const RequestProvider = ({children}) => {
    const initialCheckin = new Date();
    const roomData = {
        name:"Room#1",
        price:300,
        type:'single',
    }
    const initialGuest= 1;
    const [checkin, setcheckin] = useState(initialCheckin.toISOString());
    const [checkout, setcheckout] = useState(initialCheckin.toISOString());
    const [room, setroom] = useState(roomData)
    const [guest, setGuest] = useState(initialGuest)
    const optionChangeCheckin = (value) =>{
        setcheckin(value)
    }
    const optionChangeCheckout = (value) => {
        setcheckout(value)
    }
    const roomChangeData= (data) => {
        setroom (data)
    }
     const guestChange  = (data) =>{
        setGuest(data)
     }
    return (

        <RequestContext.Provider value = {{
            checkin,
            optionChangeCheckin, 
            checkout,
            optionChangeCheckout,
            roomName:room.name,
            roomPrice:room.price,
            roomType:room.type,
            roomChangeData,
            guest,
            guestChange,
            }}>

            {children}
            
        </RequestContext.Provider>
    )
}
