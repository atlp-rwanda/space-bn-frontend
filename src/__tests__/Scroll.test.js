import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Scroll from '../components/Scroll';

beforeEach(() => cleanup)
jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));
describe('<Scroll />', () => {
    it('should render component correctly', () => {      
      render(<Scroll />)
      expect(<Scroll />).toBeDefined();  
    })
})