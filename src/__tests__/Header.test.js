import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';


describe('<Nav />', () => {
    it('should render the header content', () => {
        render(<Header />)
        const links = document.getElementsByTagName('nav')

        expect(links.length).toBe(1)
    });
    it('should render the image on the header', () => {
        render(<Header />)
        expect(document.getElementsByTagName('img').length).toBe(1)
    });
});