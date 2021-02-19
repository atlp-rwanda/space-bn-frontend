import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import UserRole from '../views/UserRole';
import { render, cleanup,fireEvent} from '@testing-library/react';
import AuthContextProvider from '../contexts/AuthContext';

beforeEach(() => {
  const userInfo = {
    Name:'John Doe',
    Email: 'johndoe@gmail.com',
    Password: 'JohnDoe123',
    Avatar:'user avatar url',
    userType: 'Nomad'
}
localStorage.setItem('user', JSON.stringify(userInfo))
});

describe('<UserRole />', () => {
  it('should render page appropriately', () => {
      render(
      <AuthContextProvider>
       <Router>
          <UserRole />
       </Router>   
      </AuthContextProvider>)
      expect(<UserRole />).toBeDefined();
  });
});