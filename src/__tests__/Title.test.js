import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../Title';

it('renders welcome message', () => {
    render(<Title />);
    expect(screen.getByText('Welcome to Barefoot Nomad')).toBeInTheDocument();
});