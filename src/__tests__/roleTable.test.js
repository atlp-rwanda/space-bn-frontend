import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import RoleTable from '../views/UserRole/table';
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
          <RoleTable />
       </Router>   
      </AuthContextProvider>)
      expect(<RoleTable />).toBeDefined();
  });
 it('should sort element', ( )=> {
    const { getByTestId } = render(<RoleTable />);
    fireEvent.click(getByTestId('sortDataBtn'));
    fireEvent.click(getByTestId('sortDataBtn'));   
  });
});