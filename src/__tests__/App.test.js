import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

it('renders the correct contents', () => {
    render(<App />);
    expect(screen.getByText('TRAVEL BOOKINGS')).toBeInTheDocument();
    expect(screen.getByText('MADE EASY')).toBeInTheDocument();
    expect(screen.getByTestId('viewHotels-btn')).toBeEnabled();
    expect(screen.getByTestId('contactUs-btn')).toBeEnabled();
    expect(screen.getByTestId('viewHotels-btn').textContent).toBe('View Hotels');
    expect(screen.getByTestId('contactUs-btn').textContent).toBe('Contact Us');
    expect(screen.getByText('Confort')).not.toBeNull();
    expect(screen.getByText('Food')).not.toBeNull();
    expect(screen.getByText('Luxury')).not.toBeNull();
});