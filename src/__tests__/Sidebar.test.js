import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render,screen} from '@testing-library/react';
import Sidebar from '../components/Sidebar/Sidebar'

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

describe('AMDIN', () => {
    it('Should hide the requests nav item if userType is ADMIN', () => {
        const userPayloads = {
            Name:'John Doe',
            Email: 'johndoe@gmail.com',
            Password: 'JohnDoe123',
            Avatar:'user avatar url',
            userType: 'ADMIN'
        }
        localStorage.setItem('user', JSON.stringify(userPayloads))
       
        render(
            <Router>
               <Sidebar isOpen={true}/>
            </Router>
        )
       expect(screen.queryByText(/Requests/i)).toBeNull();
       expect(screen.queryByText(/Roles/i)).not.toBeNull();
       expect(screen.queryByText(/Facilities/i)).not.toBeNull();
       expect(screen.queryByText(/Add User/i)).not.toBeNull();
       expect(screen.queryByText(/Dashboard/i)).not.toBeNull();

  });

    it('Should hide the Roles and Add User nav items if userType is MANAGER', () => {
        const userPayloads = {
            Name:'John Doe',
            Email: 'johndoe@gmail.com',
            Password: 'JohnDoe123',
            Avatar:'user avatar url',
            userType: 'MANAGER'
        }
        localStorage.setItem('user', JSON.stringify(userPayloads))
    
        render(
            <Router>
            <Sidebar isOpen={true}/>
            </Router>
        )
    expect(screen.queryByText(/Roles/i)).toBeNull();
    expect(screen.queryByText(/Add User/i)).toBeNull();
    expect(screen.queryByText(/Requests/i)).toBeNull();
    expect(screen.queryByText(/Facilities/i)).not.toBeNull();
    expect(screen.queryByText(/Dashboard/i)).not.toBeNull();

    })

    it('Should hide the Roles and Add User nav items if userType is REQUESTER', () => {
        const userPayloads = {
            Name:'John Doe',
            Email: 'johndoe@gmail.com',
            Password: 'JohnDoe123',
            Avatar:'user avatar url',
            userType: 'Nomad'
        }
        localStorage.setItem('user', JSON.stringify(userPayloads))
    
        render(
            <Router>
            <Sidebar isOpen={true}/>
            </Router>
        )
    expect(screen.queryByText(/Roles/i)).toBeNull();
    expect(screen.queryByText(/Add User/i)).toBeNull();
    expect(screen.queryByText(/Profile/i)).not.toBeNull();
    expect(screen.queryByText(/Facilities/i)).not.toBeNull();
    expect(screen.queryByText(/Dashboard/i)).not.toBeNull();

    })
})

