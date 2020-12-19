import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import FAQ from '../views/FAQ';

beforeEach(() => cleanup);

describe('<FAQ />', () => {
    it('should render the component', ( )=> {
        render(
            <Router>
                <FAQ />
            </Router>
        )
        expect(<FAQ />).not.toBeNull()
    })
})
