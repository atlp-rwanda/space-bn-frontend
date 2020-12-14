import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Scroll from '../components/Scroll';

beforeEach(() => cleanup)

describe('<Scroll />', () => {
    it('should render component correctly', () => {      
      render(<Scroll />)
      expect(<Scroll />).toBeDefined();  
    })
})