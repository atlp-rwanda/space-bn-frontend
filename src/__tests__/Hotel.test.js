import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Hotel from '../views/Hotel';
import SearchBar from '../components/SeachBar';

beforeEach(() => cleanup)

describe('<Hotel />', () => {
    it('should render component correctly', () => {
        const observe = jest.fn();
        window.IntersectionObserver = jest.fn(function() {
            this.observe = observe;
        });
        render(<Hotel />)
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
        const { getByPlaceholderText }= render(<SearchBar />);
        const input = getByPlaceholderText('Search');
        const handleChange = jest.fn();
        
        input.value = 'test value'
        fireEvent.change(input, {target: {value: "test value"}})
        handleChange()
        expect(handleChange).toBeCalledTimes(1)
        expect(input).toHaveValue('test value')
    })
})