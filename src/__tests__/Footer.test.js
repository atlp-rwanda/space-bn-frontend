import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import AuthContextProvider from '../contexts/AuthContext';

describe('<Footer />', () => {
    it('should render the footer content', () => {
        render(<AuthContextProvider><Footer /></AuthContextProvider>)
        expect(screen.getByTestId('typography')).not.toBeNull()
        expect(screen.getByTestId('typography').textContent).toBe(`© ${new Date().getFullYear()} | Barefoot Nomad  | All Rights Reserved`)
    })
    it('should render 4 footer link images', () => {
        render(<AuthContextProvider><Footer /></AuthContextProvider>)
        expect(document.getElementsByTagName('img').length).toBe(4)
    })
})