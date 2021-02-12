import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import FAQ from '../views/FAQ';
import MoreFAQ from '../views/FAQ/moreFAQ';
import DeleteFAQ from '../views/FAQ/deleteFAQ';
import AuthContextProvider from '../contexts/AuthContext';
import NotificationProvider from '../contexts/NotificationContext';
import { QuestionContextProvider } from '../contexts/QuestionContext';


beforeEach(() => cleanup);
jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  }));
describe('<FAQ />', () => {
  it('should render the component', ( )=> {
    render(
      <AuthContextProvider>
        <NotificationProvider>
          <QuestionContextProvider>
            <Router>
              <FAQ />
            </Router>
          </QuestionContextProvider>
        </NotificationProvider>
      </AuthContextProvider>
    )
    expect(<FAQ />).not.toBeNull();
  });

  test('Should render questions on page reload', () => {
    // Render a React component to the DOM

    // Use DOM APIs (querySelector) to make assertions
  });
});

describe('<MoreFAQ />', () => {
  it('should render the component', ( )=> {
    render(
      <AuthContextProvider>
        <QuestionContextProvider>
          <Router>
            <MoreFAQ />
          </Router>
        </QuestionContextProvider>
      </AuthContextProvider>
    )
    expect(<MoreFAQ />).not.toBeNull();
  });
});

describe('<DeleteFAQ />', () => {
  it('should render the component', ( )=> {
    render(
      <AuthContextProvider>
        <NotificationProvider>
          <QuestionContextProvider>
            <Router>
              <DeleteFAQ />
            </Router>
          </QuestionContextProvider>
        </NotificationProvider>
      </AuthContextProvider>
    )
    expect(<DeleteFAQ />).not.toBeNull();
  });
});
