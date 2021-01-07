import React,{useState} from 'react';
import { BrowserRouter,Router} from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import DashboardNav from '../components/DashboardNav/DashboardNav';
import userEvent from '@testing-library/user-event';
import RequestThread from '../views/RequestThread/RequestThread';
import {createMemoryHistory} from 'history';
import Sidebar from '../components/Sidebar/Sidebar'
import '@testing-library/jest-dom/extend-expect'


beforeEach(() => {
    const userInfo = {
      Name:'John Doe',
      Email: 'johndoe@gmail.com',
      Password: 'JohnDoe123',
      Avatar:'user avatar url',
      userType: 'REQUESTER'
  }
  localStorage.setItem('user', JSON.stringify(userInfo))
  });


const mockHistoryPush = jest.fn();


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
   })
}))


describe('<DashboardNav />', () => {
    it('should render the DashboardNav component', ( )=> {
        render(
            <BrowserRouter>
                <DashboardNav />
            </BrowserRouter>
        )
        expect(<DashboardNav />).not.toBeNull();
        expect(screen.getByTestId('searchInput')).toBeInTheDocument();
        expect(screen.getByTestId('profile')).toBeInTheDocument();
        expect(screen.getByTestId('notifications')).toBeInTheDocument();
        expect(screen.getByTestId('messages')).toBeInTheDocument();


    })

    test("Is should show the sidebar if isOpen prop is true", () => {
            const history = createMemoryHistory();
            history.push('/requests/thread');
            const { getByText } = render(
            <Router history={history}>
            <Sidebar isOpen={true} />
            </Router>
            );
        
            expect(getByText(/Dashboard/i)).toBeInTheDocument();
        });

        test("Should hide the sidebar if the sidebar trigger button  clicked setting isOpen prop to false", () => {
            const history = createMemoryHistory();
            history.push('/requests/thread');
            
             render(
                <Router history={history}>
                  <DashboardNav />
                </Router>
                );

                render(
                <Router history={history}>
                <Sidebar isOpen={false} />
                </Router>
                );
            
                expect(screen.queryByText(/Dashboard/i)).toBeNull ();
          
        });



            test('Should redirect to the home when logo clicked', () => {
                const {getByTestId} = render(
                    <BrowserRouter>
                        <DashboardNav/>
                    </BrowserRouter>
                );
                
                fireEvent.click(getByTestId('logo'));
                
                expect(mockHistoryPush).toHaveBeenCalledWith('/');
            });
        
})







