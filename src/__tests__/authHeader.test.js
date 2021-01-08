import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AuthContextProvider from '../contexts/AuthContext';
import AuthHeader from '../components/Header/authHeader';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";



const SizeWrapper = (props) => {
  const theme = createMuiTheme({
    props: { MuiWithWidth: { initialWidth: "md" } },
  });

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

const mockHistory = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistory,
    })
}))

describe('<AuthHeader />', () => {

    it('should render the component correctly', () => {
        render(
        <AuthContextProvider>
            <AuthHeader />
        </AuthContextProvider>
        )
        expect(<AuthHeader />).toBeDefined()
    })
    it('should render the header content', () => {
        render(
        <AuthContextProvider>
            <AuthHeader />
        </AuthContextProvider>)
        const nav = document.getElementsByTagName('nav')

        expect(nav.length).toBe(1)
    });
    it('should push to home page when logo clicked', () => {
        const {getByRole} = render(
            <AuthContextProvider>
                <MemoryRouter>
                    <AuthHeader />
                </MemoryRouter>
            </AuthContextProvider>
            )
            fireEvent.click(getByRole('img'))
            expect(mockHistory).toBeCalledWith('/')
    });
    it('should hide content on resize', () => {
       render(
       <AuthContextProvider>
           <Router>
                <AuthHeader />
            </Router>
        </AuthContextProvider>, { wrapper: SizeWrapper });

      expect(document.getElementsByClassName('MuiTypography-root').length).toEqual(5);
      expect(document.getElementsByTagName("button").length).toEqual(2)
    });
    it('should should redirect when anchor tag clicked', () => {
       render(
       <AuthContextProvider>
           <Router>
                <AuthHeader />
            </Router>
        </AuthContextProvider>, { wrapper: SizeWrapper });

      expect(document.getElementsByTagName('a').length).toEqual(4)
    });
    it('should should display profile info when get clicked', () => {     
       render(
       <AuthContextProvider>
           <Router>
                <AuthHeader />
            </Router>
        </AuthContextProvider>, { wrapper: SizeWrapper });
        const mockedFn = jest.fn()

        const btn = screen.getByRole('button', {name: /username/i})
        fireEvent.click(btn)
        mockedFn()
        expect(mockedFn).toBeCalledTimes(1)
    });
    it('should should render profile content', () => {     
        render(
            <AuthContextProvider>
                <Router>
                     <AuthHeader open={true} />
                 </Router>
             </AuthContextProvider>, { wrapper: SizeWrapper});
        const btn = screen.getByRole('button', {name: /username/i})
        
        fireEvent.click(btn)
        const ul = document.getElementsByTagName('li')

        expect(ul.length).toEqual(2)
        
    })
    it('should should dispatch logout on click', () => {     
        render(
            <AuthContextProvider>
                <Router>
                     <AuthHeader open={true} />
                 </Router>
             </AuthContextProvider>, { wrapper: SizeWrapper});
        const btn = screen.getByRole('button', {name: /username/i})
        
        fireEvent.click(btn)
        const ul = document.getElementsByTagName('li')
        const logout = ul[1]
        const mockLogOutFn = jest.fn()

        fireEvent.click(logout)
        mockLogOutFn()
        expect(mockLogOutFn).toBeCalledTimes(1)
        
    })
    it('should should redirect on login page when logout dispatched', () => {     
        render(
            <AuthContextProvider>
                <MemoryRouter>
                     <AuthHeader />
                 </MemoryRouter>
             </AuthContextProvider>, { wrapper: SizeWrapper});
        const btn = screen.getByRole('button', {name: /username/i})
        
        
        fireEvent.click(btn)
        const ul = document.getElementsByTagName('li')
        const logout = ul[1]

        fireEvent.click(logout)

        expect(mockHistory).toBeCalledWith('/login')  
        
    })
    
    it('Should navigate when clicked', () => {
        const SizeWrapper = (props) => {
            const theme = createMuiTheme({
                props: { MuiWithWidth: { initialWidth: "sm" } },
            });
        
            return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
        };
        
        const {getByRole} = render(
            <AuthContextProvider>
                <Router>
                    <AuthHeader />
                </Router>
            </AuthContextProvider>, { wrapper: SizeWrapper }
        );
        
        const links = document.getElementsByTagName('a');
        
        expect(links.length).toEqual(0);
    });
})
