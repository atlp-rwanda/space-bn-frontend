import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AuthContextProvider from '../contexts/AuthContext';
import Header from '../components/Header/index';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

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
jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  }));
describe('<Header />', () => {
    it('Should render the component correctly', () => {
        render(
            <AuthContextProvider>
                <Router>
                    <Header />
                </Router>
            </AuthContextProvider>
        );
        
        expect(<Header />).toBeDefined();
    });
    
    it('Should render the header content', () => {
        render(
            <AuthContextProvider>
                <Router>
                    <Header />
                </Router>
            </AuthContextProvider>
        );
        const nav = document.getElementsByTagName('nav');
        
        expect(nav.length).toBe(1);
    });
    
    test('Should redirect to the home page when clicked', () => {
        const {getByRole} = render(
            <AuthContextProvider>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </AuthContextProvider>
        );
        
        fireEvent.click(getByRole('img'));
        
        expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });
    
    it('Should display navlinks(6)', () => {
        render(
            <AuthContextProvider>
                <Router>
                    <Header />
                </Router>
            </AuthContextProvider>, {wrapper: SizeWrapper}
        );
        
        expect(document.getElementsByClassName('MuiTypography-root').length).toEqual(6);
    });
    
    it('Should display navlinks', () => {
        render(
            <AuthContextProvider>
                <Router>
                    <Header />
                </Router>
            </AuthContextProvider>, { wrapper: SizeWrapper }
        );
        const links = document.getElementsByTagName('a');
        
        expect(links.length).toEqual(6);
    });
    it('Should select language', () => {
       const {getByTestId } = render(
            <AuthContextProvider>
                <Router>
                    <Header />
                </Router>
            </AuthContextProvider>, { wrapper: SizeWrapper }
        );
        const handleSelectLang = jest.fn();
        const select= getByTestId('select-language');

        fireEvent.change(select, {target: {value: "en" || "fr" || "rw" || "sw"}})
        handleSelectLang();

        expect(handleSelectLang).toBeCalledTimes(1);
        expect(select).toHaveValue("en" || "fr" || "rw" || "sw")
    });
    
    it('Should navigate when clicked', () => {
        const SizeWrapper = (props) => {
            const theme = createMuiTheme({
                props: { MuiWithWidth: { initialWidth: "sm" } },
            });
        
            return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
        };
        
        const {getAllByRole} = render(
            <AuthContextProvider>
                <Router>
                    <Header />
                </Router>
            </AuthContextProvider>, { wrapper: SizeWrapper }
        );
        
        const iconButton = getAllByRole('button');
        
        iconButton.forEach((btn) => {
            fireEvent.click(btn);
        })
        const links = document.getElementsByTagName('a');
        
        expect(links.length).toEqual(6);
    });
});