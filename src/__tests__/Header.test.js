import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHIstory } from 'history';
import Header from '../components/Header';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('Testing Header', () => {
    test('Should redirect to the home page when clicked', () => {
        const {getByRole} = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        
        fireEvent.click(getByRole('img'));
        
        expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });
    
    test('Should render the header content', () => {
        render(<Header />)
        const appBar = document.getElementsByTagName('AppBar')
        
        expect(appBar.length).toBe(0)
    });
    
    test('Should add 2 and 3', () => {
        const sum = () => 2 + 3;
        
        expect(sum()).toBe(5);
        
    });
});