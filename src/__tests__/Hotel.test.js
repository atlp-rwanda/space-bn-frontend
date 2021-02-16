import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Hotel from '../views/Hotel';
import AuthContextProvider from '../contexts/AuthContext';

beforeEach(() => cleanup)
jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  }));
describe('<Hotel />', () => {
    it('should render component correctly', () => {
        const observe = jest.fn();
        window.IntersectionObserver = jest.fn(function() {
            this.observe = observe;
        });
        render(<AuthContextProvider> <Hotel /></AuthContextProvider>)
        expect(<Hotel />).toBeDefined()
    })
    it('should observe current page', () => {
        const observe = jest.fn();
        window.IntersectionObserver = jest.fn(function() {
            this.observe = observe;
        });
        expect(observe).toBeTruthy()
    })
    it('should filter on change event', () => {
        const { getByPlaceholderText }= render(<AuthContextProvider> <Hotel /></AuthContextProvider>);
        const input = getByPlaceholderText('Search hotel');
        const handleChange = jest.fn();
        
        fireEvent.change(input, {target: {value: "test value"}})
        handleChange()
        expect(handleChange).toBeCalledTimes(1)
        expect(input).toHaveValue('test value')
    })
})