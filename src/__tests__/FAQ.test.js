import React from 'react';
import { render, screen } from '@testing-library/react';
import FAQ from '../views/FAQ';

it('Renders the correct contents', () => {
    render(<FAQ />)
});