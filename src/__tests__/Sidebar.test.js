import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render,screen} from '@testing-library/react';
import Sidebar from '../components/Sidebar/Sidebar';

beforeEach(() => {
    const userId = 1,
        userRoleId = 1;
    localStorage.setItem('userId', JSON.stringify(userId));
    localStorage.setItem('userRoleId', JSON.stringify(userRoleId));
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
    it('Should hide the requests nav item if userRole is ADMIN', () => {
        const userId = 1,
            userRoleId = 1;
    localStorage.setItem('userId', JSON.stringify(userId));
    localStorage.setItem('userRoleId', JSON.stringify(userRoleId));

        render(
            <Router>
                <Sidebar isOpen={true}/>
            </Router>
        )
        expect(screen.queryByText(/Dashboard/i)).not.toBeNull();
        expect(screen.queryByText(/Facilities/i)).not.toBeNull();
        expect(screen.queryByText(/Add User/i)).not.toBeNull();
        expect(screen.queryByText(/Profile/i)).not.toBeNull();
        expect(screen.queryByText(/Requests/i)).toBeNull();
        expect(screen.queryByText(/Roles/i)).not.toBeNull();
        expect(screen.queryByText(/Hotels/i)).not.toBeNull();
        expect(screen.queryByText(/FAQ/i)).not.toBeNull();

    });

    it('Should hide the Roles and Add User nav items if userRole is MANAGER', () => {
        const userId = 2,
        userRoleId = 2;
    localStorage.setItem('userId', JSON.stringify(userId));
    localStorage.setItem('userRoleId', JSON.stringify(userRoleId));
    
        render(
            <Router>
            <Sidebar isOpen={true}/>
            </Router>
        )
        expect(screen.queryByText(/Dashboard/i)).not.toBeNull();
        expect(screen.queryByText(/Facilities/i)).not.toBeNull();
        expect(screen.queryByText(/Profile/i)).not.toBeNull();
        expect(screen.queryByText(/Requests/i)).not.toBeNull();
        expect(screen.queryByText(/Req Statistics/i)).not.toBeNull();
        expect(screen.queryByText(/Roles/i)).toBeNull();
        expect(screen.queryByText(/FAQ/i)).toBeNull();
    })
    
    it('Should render the following if userRole is TRAVEL ADMIN', () => {
        const userId = 7,
        userRoleId = 3;
    localStorage.setItem('userId', JSON.stringify(userId));
    localStorage.setItem('userRoleId', JSON.stringify(userRoleId));
    
        render(
            <Router>
            <Sidebar isOpen={true}/>
            </Router>
        )
        expect(screen.queryByText(/Dashboard/i)).not.toBeNull();
        expect(screen.queryByText(/Facilities/i)).not.toBeNull();
        expect(screen.queryByText(/Profile/i)).not.toBeNull();
        expect(screen.queryByText(/Requests/i)).not.toBeNull();
        expect(screen.queryByText(/Req Statistics/i)).not.toBeNull();
        expect(screen.queryByText(/Roles/i)).toBeNull();
        expect(screen.queryByText(/FAQ/i)).toBeNull();
    })
    
    it('Should render the following if userRole is TRAVEL TEAM MEMBER', () => {
        const userId = 8,
        userRoleId = 4;
    localStorage.setItem('userId', JSON.stringify(userId));
    localStorage.setItem('userRoleId', JSON.stringify(userRoleId));
    
        render(
            <Router>
            <Sidebar isOpen={true}/>
            </Router>
        )
        expect(screen.queryByText(/Dashboard/i)).not.toBeNull();
        expect(screen.queryByText(/Facilities/i)).not.toBeNull();
        expect(screen.queryByText(/Profile/i)).not.toBeNull();
        expect(screen.queryByText(/Requests/i)).not.toBeNull();
        expect(screen.queryByText(/Req Statistics/i)).not.toBeNull();
        expect(screen.queryByText(/Roles/i)).toBeNull();
        expect(screen.queryByText(/FAQ/i)).toBeNull();
    })

    it('Should hide the Roles and Add User nav items if userRole is REQUESTER', () => {
        const userId = 6,
        userRoleId = 5;
        localStorage.setItem('userId', JSON.stringify(userId));
        localStorage.setItem('userId', JSON.stringify(userRoleId));
    
        render(
            <Router>
            <Sidebar isOpen={true}/>
            </Router>
        )
        expect(screen.queryByText(/Dashboard/i)).not.toBeNull();
        expect(screen.queryByText(/Facilities/i)).not.toBeNull();
        expect(screen.queryByText(/Profile/i)).not.toBeNull();
    })
})

