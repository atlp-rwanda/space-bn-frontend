import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from '../views/Home';
import AuthContextProvider from '../contexts/AuthContext';

it('renders the correnct contents', () => {
    render(
        <AuthContextProvider>
            <Router>
                <Home/>
            </Router>
        </AuthContextProvider>
        );
    expect(screen.getByText('TRAVEL BOOKINGS')).toBeInTheDocument();
    expect(screen.getByText('MADE EASY')).toBeInTheDocument();
    expect(screen.getByTestId('viewHotels-btn')).toBeEnabled();
    expect(screen.getByTestId('contactUs-btn')).toBeEnabled();
    expect(screen.getByTestId('viewHotels-btn').textContent).toBe('View Hotels');
    expect(screen.getByTestId('contactUs-btn').textContent).toBe('Contact Us');
    expect(screen.getByText('Comfort')).not.toBeNull();
    expect(screen.getByText('Food')).not.toBeNull();
    expect(screen.getByText('Luxury')).not.toBeNull();
});

it('renders 4 home page images', ()=> {
    render(
    <AuthContextProvider>
        <Router>
            <Home/>
        </Router>
    </AuthContextProvider>
    );
    const images = document.getElementsByTagName('img');
    expect(images.length).toBeGreaterThan(3);
})