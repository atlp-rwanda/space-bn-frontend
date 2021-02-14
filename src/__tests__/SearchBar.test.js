import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SeachBar';

beforeEach(() => cleanup);
jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  }));
describe('<SearchBar />', () => {
    it('should render component correctly', () => {
        render(<SearchBar />)
        expect(<SearchBar />).toBeDefined()
        expect(document.getElementsByTagName('input')).toBeDefined()
    })
    it('should listen on change event', () => {
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