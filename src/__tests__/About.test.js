import React from 'react';
import { render, screen } from '@testing-library/react';
import Aboutus from '../views/Aboutus/About';
import AuthContextProvider from '../contexts/AuthContext';

describe('<Aboutus />', () => {
    it('should render the footer content', () => {
        render(
            <AuthContextProvider>
                <Aboutus />
            </AuthContextProvider>
        )
        expect(screen.getByTestId('heading')).not.toBeNull()
        expect(screen.getByTestId('heading').textContent).toBe('Welcome to Barefoot Nomad,')
    })
    it('should render card with image', () => {
        render(
            <AuthContextProvider>
                <Aboutus />
            </AuthContextProvider>
        )
        expect(document.getElementsByTagName('CardTestmonial').length).not.toBeNull()
    })

    it('should render right side image', () => {
        render(
            <AuthContextProvider>
                <Aboutus />
            </AuthContextProvider>
        )
        expect(screen.getByAltText('hotel')).toBeTruthy() 
    })
})
