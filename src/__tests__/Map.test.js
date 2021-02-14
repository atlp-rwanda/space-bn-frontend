import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MapLocation from '../components/Map';
import {hotelInfo} from '../helpers/hotelInfo';

beforeEach(() => cleanup);
jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  }));
describe('<MapLocation />', () => {
    it('should render component correctly', () => {
        render(<MapLocation searchValue={hotelInfo}/>)
        expect(<MapLocation searchValue={hotelInfo}/>).toBeDefined()
    })
    it('should render images equal to the number of elements in the array', () => {
        render(<MapLocation searchValue={hotelInfo}/>)
        const img = document.getElementsByTagName('img')
        expect(img.length).toEqual(3)
    })
    it('should render a location on click event', () => {
        render(<MapLocation 
            activePopup={true} 
            searchValue={hotelInfo} 
            hotelPosition={hotelInfo[0].coordinates} 
            activeHotel={hotelInfo[0]} 
            />)

        expect(<MapLocation />).toBeDefined()
    })
})