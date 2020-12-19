import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import AuthContextProvider from '../contexts/AuthContext';
import Header from '../components/Header/index';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const mockHistoryPush = jest.fn();

const SizeWrapper = (props) => {
    const theme = createMuiTheme({
        props: { MuiWithWidth: { initialWidth: "md" } },
    });

    return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    })
}))

describe('<Header />', () => {
    it('Should render the component correctly', () => {
        render(
            <Router>
                <Header />
            </Router>
        );
        
        expect(<Header />).toBeDefined();
    });
    
    it('Should render the header content', () => {
        render(
            <Router>
                <Header />
            </Router>
        );
        const nav = document.getElementsByTagName('nav');
        
        expect(nav.length).toBe(1);
    });
    
    test('Should redirect to the home page when clicked', () => {
        const {getByRole} = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        
        fireEvent.click(getByRole('img'));
        
        expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });
    
    it('Should hide content on resize', () => {
        render(
            <Router>
                <Header />
            </Router>, {wrapper: SizeWrapper}
        );
        
        expect(document.getElementsByClassName('MuiTypography-root').length).toEqual(6);
    });
});