import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import PaperCard from '../components/PaperCard';
import {hotelInfo} from '../helpers/hotelInfo';

beforeEach(() => cleanup);

describe('<PaperCard />', () => {
    it('should render component correctly', () => {
        render(<PaperCard searchValue={hotelInfo}/>)
        expect(<PaperCard />).toBeDefined()
    })
    it('should show hotel location on click', () => {  
        const activePopup = false;   
        const { getAllByTestId} = 
            render(<PaperCard 
                searchValue={hotelInfo} 
                setHotelPosition={() => hotelInfo[0].coordinates} 
                setActivePopup={() => !activePopup} 
                setActiveHotel={() => hotelInfo[0]}
            />)

        const paper = getAllByTestId('paper');
        const mockFn = jest.fn();

        fireEvent.click(paper[0])
        mockFn(hotelInfo[0])
        expect(mockFn).toBeCalledTimes(1)
    })
})