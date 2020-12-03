import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../views/Home';

it('renders the correnct contents', () => {
    render(<Home/>);
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

it('renders 4 home page images', ()=> {
    render(<Home />);
    const images = document.getElementsByTagName('img');
    expect(images.length).toBe(4);
})