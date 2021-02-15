import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import * as ReactDOM from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import FAQ from '../views/FAQ';
import AuthContextProvider from '../contexts/AuthContext';


beforeEach(() => cleanup);
jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: key => key})
  }));
describe('<FAQ />', () => {
  it('should render the component', ( )=> {
    render(
      <AuthContextProvider>
      <Router>
        <FAQ />
      </Router>
      </AuthContextProvider>
    )
    expect(<FAQ />).not.toBeNull();
  });

  // test('Should render questions on page reload', () => {
    // Render a React component to the DOM
    // const root = document.createElement('div');
    // ReactDOM.render(<FAQ />, root);

    // Use DOM APIs (querySelector) to make assertions
    // expect(root.querySelector('li').not.toBeNull())
  // });
})
