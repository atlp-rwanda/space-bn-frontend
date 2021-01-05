import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render,screen } from '@testing-library/react';
import RequestThread from '../views/RequestThread/RequestThread';

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

describe('<RequestThread />', () => {
    it('should render the component', ( )=> {
        render(
            <Router>
                <RequestThread />
            </Router>
        )
    })
})

describe('Elements', () => {
  it('should render the elements', () => {
    render(
      <Router>
          <RequestThread />
      </Router>
   )
   expect(screen.getByTestId('threadNav')).not.toBeNull();
   expect(screen.getByTestId('requestInfoWrapper')).not.toBeNull();
   expect(screen.getByTestId('chatWrapper')).not.toBeNull();


  })
})
