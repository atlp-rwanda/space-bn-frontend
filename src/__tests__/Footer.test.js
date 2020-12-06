import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('<Footer />', () => {
    it('should render the footer content', () => {
        render(<Footer />)
        expect(screen.getByTestId('typography')).not.toBeNull()
        expect(screen.getByTestId('typography').textContent).toBe('© 2020 | Barefoot Normad  | All Rights Reserved')
    })
    it('should render 4 footer link images', () => {
        render(<Footer />)
        expect(document.getElementsByTagName('img').length).toBe(4)
    })
})