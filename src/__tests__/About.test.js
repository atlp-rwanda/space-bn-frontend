import React from 'react';
import { render, screen } from '@testing-library/react';
import Aboutus from '../views/Aboutus/About';

describe('<Aboutus />', () => {
    it('should render the footer content', () => {
        render(<Aboutus />)
        expect(screen.getByTestId('heading')).not.toBeNull()
        expect(screen.getByTestId('heading').textContent).toBe('Happy Clients')
    })
    it('should render card with image', () => {
        render(<Aboutus />)
        expect(document.getElementsByTagName('CardTestmonial').length).not.toBeNull()
    })

    it('should render right side image', () => {
        render(<Aboutus />)
        expect(screen.getByAltText('hotel')).toBeTruthy() 
    })
})