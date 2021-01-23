import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render,screen } from '@testing-library/react';
import RequestThread from '../views/RequestThread/RequestThread';
import AuthContextProvider from '../contexts/AuthContext';
import NotificationProvider from '../contexts/NotificationContext';

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
jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));
describe('<RequestThread />', () => {
    it('should render the component', ( )=> {
        render(
          <AuthContextProvider>
            <NotificationProvider>
              <Router>
                  <RequestThread />
              </Router>
            </NotificationProvider>
          </AuthContextProvider>
        )
    })
})

describe('Elements', () => {
  it('should render the elements', () => {
    render(
      <AuthContextProvider>
        <NotificationProvider>
          <Router>
              <RequestThread />
          </Router>
      </NotificationProvider>
      </AuthContextProvider>
   )
   expect(screen.getByTestId('threadNav')).not.toBeNull();
   expect(screen.getByTestId('requestInfoWrapper')).not.toBeNull();
   expect(screen.getByTestId('chatWrapper')).not.toBeNull();

  })
})
