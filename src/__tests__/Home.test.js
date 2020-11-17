import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../views/Home';

it('renders welcome message', () => {
    render(<Home/>);
    expect(screen.getByText('Welcome to Barefoot Nomad')).toBeInTheDocument();
});