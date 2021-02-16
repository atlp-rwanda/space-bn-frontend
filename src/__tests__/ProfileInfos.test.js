import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import ProfileInfos from '../components/ProfileInfos';

beforeEach(() => cleanup);
jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  }));
describe('<ProfileInfos />', () => {
    it('Should render the component', () => {
        render(
            <Router>
                <ProfileInfos />
            </Router>
        )
        expect(<ProfileInfos />).not.toBeNull();
    });
});