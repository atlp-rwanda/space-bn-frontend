import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FAQ from '../views/FAQ';

beforeEach(() => cleanup);

describe('<FAQ />', () => {
    it('should render the component', ( )=> {
        render(<FAQ />)
        expect(<FAQ />).not.toBeNull()
    })
})