import React from 'react';
import { render, fireEvent, cleanup, getByRole } from '@testing-library/react';
import AuthContextProvider from "../contexts/AuthContext";
import Contact from '../views/Contact';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import Pattern from '../shared/styles/Pattern';



beforeEach(cleanup);
describe('<Contact />', () => {
    it('Should render the component', () => {
        render(
            <AuthContextProvider>
                <Router>
                    <Contact />
                </Router>
            </AuthContextProvider>
        )
        const { getAllByText, getByTestId } = render();
        
        const nameLabel = getByTestId('name-label');
        const emailLabel = getByTestId('email-label');
        const subjectLabel = getByTestId('subject-label');
        
        expect(getAllByText('Submit')).toBeTruthy()
        expect(nameLabel).toHaveTextContent('Name');
        expect(emailLabel).toHaveTextContent('Email');
        expect(subjectLabel).toHaveTextContent('Subject');
    });
    it('Should display value on input change', () => {
        const { getByTestId } = render(
            <AuthContextProvider>
                <Router>
                    <Contact />
                </Router>
            </AuthContextProvider>
        );
        const nameValue = getByTestId('name-value');
        const emailValue = getByTestId('email-value');
        const subjectValue = getByTestId('subject-value');

        fireEvent.change(nameValue, { target: { value: 'name' } });
        fireEvent.change(emailValue, { target: { value: 'email' } });
        fireEvent.change(subjectValue, { target: { value: 'subject' } });
        expect(nameValue).toHaveValue('name');
        expect(emailValue).toHaveValue('email');
        expect(subjectValue).toHaveValue('subject');
    });
    it('Should submit when clicked', () => {
        const { getByRole} = render(
            <AuthContextProvider>
                <Router>
                    <Contact />
                </Router>
            </AuthContextProvider>
        );
        
        const button = getByRole('button');
        const mockedFnc = jest.fn();

        fireEvent.click(button);
        mockedFnc();
        const span = document.getElementsByClassName('MuiButton-label');

        expect(span.length).toBe(1);
    });
});