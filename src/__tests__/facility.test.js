import React from 'react';
import Facility from '../views/facilities/facility';
import { render, cleanup,fireEvent} from '@testing-library/react';
import AuthContextProvider from '../contexts/AuthContext';
import Table from '../views/facilities/table'
import Container from '../views/facilities/dashBoardContainer'
import TablePagination from '@material-ui/core/TablePagination';
import {BrowserRouter} from 'react-router-dom'



beforeEach(() => cleanup);
beforeEach(() => {
  const userInfo = {
    Name:'John Doe',
    Email: 'johndoe@gmail.com',
    Password: 'JohnDoe123',
    Avatar:'user avatar url',
    userType: 'REQUESTER'
}
localStorage.setItem('user', JSON.stringify(userInfo))
});

describe('<Facility />', () => {
  it('should render the component Facility', ( )=> {
      render(
        <AuthContextProvider>
          <BrowserRouter>
          <Facility /> 
          </BrowserRouter>
        </AuthContextProvider>
        )
      expect(<Facility />).toBeTruthy();
  })

  it('should Open and close add facility modal on click', ( )=> {
    const { getByTestId } = render(
      <AuthContextProvider>
       <BrowserRouter>
       <Facility /> 
       </BrowserRouter>
    </AuthContextProvider>
    );
    fireEvent.click(getByTestId('openAddModalBtn'));
    fireEvent.click(getByTestId('modalOpn'));

    
  })

  it('should Open add add element into the detail array and display in table', ( )=> {
    const { getByTestId } = render(
      <AuthContextProvider>
      <BrowserRouter>
      <Facility /> 
      </BrowserRouter>
    </AuthContextProvider>
    );
    fireEvent.click(getByTestId('openAddModalBtn'));
    fireEvent.click(getByTestId('addFacDetailsBtn'));
    fireEvent.click(getByTestId('rmvDetailBtn'));
    fireEvent.click(getByTestId('submitForm'));
    
    
  })
  it('should Open display name in table field', ( )=> {
    const { getByTestId } = render(
      <AuthContextProvider>
      <BrowserRouter>  
      <Facility /> 
      </BrowserRouter>
    </AuthContextProvider>
    );
    fireEvent.click(getByTestId('openAddModalBtn'));
    fireEvent.change(getByTestId('facNames'),{target: {value: "dummy"}});
    fireEvent.change(getByTestId('facAddress'),{target: {value: "dummy"}});
    fireEvent.change(getByTestId('facType'),{target: {value: "economy"}}); 
  })

  it('should check all the checkbox', ( )=> {
    const { getByTestId } = render(<Table />);
    fireEvent.click(getByTestId('checkAllBtn'));
    fireEvent.click(getByTestId('checkAllBtn'));
  })

  it('should sort elemt', ( )=> {
    const { getByTestId } = render(<Table />);
    fireEvent.click(getByTestId('sortDataBtn'));
    fireEvent.click(getByTestId('sortDataBtn'));   
  })

  it('should select or unselect table row', ( )=> {
    const { getByTestId } = render(<Table />);
    fireEvent.click(getByTestId('tableRow'));
    fireEvent.click(getByTestId('tableRow'));
  })

  it('should render container', ( )=> {
    render(
      <AuthContextProvider>
        <BrowserRouter>
        <Container />
        </BrowserRouter> 
      </AuthContextProvider>
      )
    expect(<Container />).toBeTruthy();
  })

  it('should  render table paginations', ( )=> {
    const mocked=jest.fn()
    render(
      <AuthContextProvider>
        <BrowserRouter>
        <Facility />
        </BrowserRouter>
        <TablePagination onChange={mocked}/>
      </AuthContextProvider>
      )
    expect(<Facility />).toBeTruthy();
    expect(<TablePagination />).toBeTruthy();
      })
})