import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Signup from '../views/Signup';



beforeEach(cleanup);
describe('<Signup />', () => {
    it('Should render the component', () => {
        render(<Signup />)
        const {getAllByText, getByAltText, getByTestId} = render();

        const nameLabel = getByTestId('name-label');
        const emailLabel = getByTestId('email-label');
        const passwordLabel = getByTestId('password-label');
        const passwordValue = getByTestId('password-value');
        const emailValue = getByTestId('email-value');
        const nameValue = getByTestId('name-value');

        expect(getAllByText('Signup')).toBeTruthy()
        expect(getByAltText('google icon')).toBeTruthy()
        expect(getByAltText('facebook icon')).toBeTruthy()
        expect(nameLabel).toHaveTextContent('Name')
        expect(emailLabel).toHaveTextContent('Email')
        expect(passwordLabel).toHaveTextContent('Password')
        expect(nameValue).toHaveValue('')
        expect(emailValue).toHaveValue('')
        expect(passwordValue).toHaveValue('')
    });
    it('Should calls onClick props when clicked', () => {
        const {getByTestId} = render(<Signup />)
        const btn =getByTestId('submit')
        const mocked = jest.fn();

        fireEvent.click(btn)
        mocked()
        expect(mocked).toHaveBeenCalledTimes(1)
    });
    it('Should display value on input change', () => {
        const {getByTestId} = render(<Signup />)
        const passwordValue = getByTestId('password-value');
        const emailValue = getByTestId('email-value');
        const nameValue = getByTestId('name-value');

        fireEvent.change(passwordValue, {target: {value: 'password'}});
        fireEvent.change(emailValue, {target: {value: 'email'}});
        fireEvent.change(nameValue, {target: {value: 'name'}});
        expect(nameValue).toHaveValue('name')
        expect(emailValue).toHaveValue('email')
        expect(passwordValue).toHaveValue('password') 
    });
    it('Should toggle password visibility when clicked', () => {
        const {getByTestId} = render(<Signup />)
        const togglePassIcon = getByTestId('password-icon-toggle');
        const mockedFnc = jest.fn();


        fireEvent.click(togglePassIcon)
        mockedFnc()
        expect(mockedFnc).toBeCalledTimes(1);
    });
    it('Should prevent password default behavior on mouse down', () => {
        const {getByTestId} = render(<Signup />)
        const togglePassIcon = getByTestId('password-icon-toggle');
        const handleMouseDown = jest.fn();

        fireEvent.mouseDown(togglePassIcon);
        handleMouseDown();
        expect(handleMouseDown).toBeCalledTimes(1)
    });   
})
