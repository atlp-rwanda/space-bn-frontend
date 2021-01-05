import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render} from '@testing-library/react';
import Sidebar from '../components/Sidebar/Sidebar'

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

describe('<Sidebar />', () => {
    it('should render the sidebar component', ( )=> {
        render(
            <Router>
                <Sidebar />
            </Router>
        )
        expect(<Sidebar />).not.toBeNull()
    })
})

