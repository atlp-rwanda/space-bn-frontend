import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {fireEvent, render} from '@testing-library/react';
import DashboardNav from '../components/DashboardNav/DashboardNav'



describe('<DashboardNav />', () => {
    it('should render the DashboardNav component', ( )=> {
        render(
            <Router>
                <DashboardNav />
            </Router>
        )
        expect(<DashboardNav />).not.toBeNull()
    })

    it('elements', () => {
         <Router>
             <DashboardNav/>
         </Router>  
    })
})


const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    })
}))

test('Should redirect to the home when logo clicked', () => {
    const {getByTestId} = render(
        <Router>
            <DashboardNav/>
        </Router>
    );
    
    fireEvent.click(getByTestId('logo'));
    
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
});





