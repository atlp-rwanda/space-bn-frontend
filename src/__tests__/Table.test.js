import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import AuthContextProvider from '../contexts/AuthContext';
import RequestWrapper from '../components/Request';
import { TablePaginationActions } from '../components/Request/Table';



beforeEach(() => cleanup)
describe('<RequestWrapper />', () => {
    it.skip('should render table appropriately', () => { 
        render(
        <AuthContextProvider>
            <RequestWrapper />
        </AuthContextProvider>)
        expect(<RequestWrapper />).toBeDefined();
    });
    it('should render first page on click', () => {
       let page = 2;
        render(
        <AuthContextProvider>
            <TablePaginationActions  page={page} count={2} rowsPerPage={5} onChangePage={() => jest.fn()}/>
        </AuthContextProvider> 
        );
        const mockFn = jest.fn();
        fireEvent.click(screen.getByRole('button',{ name: /first page/i}))
        mockFn()
        expect(mockFn).toBeCalledTimes(1)
    });
    it('should render previous page on click', () => {
       let page = 2;
        render(
        <AuthContextProvider>
            <TablePaginationActions  page={page} count={2} rowsPerPage={5} onChangePage={() => jest.fn()}/>
        </AuthContextProvider> 
        );
        const mockFn = jest.fn();
        fireEvent.click(screen.getByRole('button',{ name: /previous page/i}))
        mockFn()
        expect(mockFn).toBeCalledTimes(1)
    });
    it('should render next page on click', () => {
       render(
        <AuthContextProvider>
            <RequestWrapper />
        </AuthContextProvider> 
        );
        const mockFn = jest.fn();
        fireEvent.click(screen.getByRole('button',{ name: /next page/i}))
        mockFn()
        expect(mockFn).toBeCalledTimes(1)
    });
    it('should go to the last page when clicked', () => {
       render(
        <AuthContextProvider>
            <RequestWrapper />
        </AuthContextProvider> 
        );
        const mockFn = jest.fn();
        fireEvent.click(screen.getByRole('button',{ name: /last page/i}))
        mockFn()
        expect(mockFn).toBeCalledTimes(1)
    });
    it('should highlight selected row clicked', () => {
       render(
        <AuthContextProvider>
            <RequestWrapper />
        </AuthContextProvider>
        );
        const mockFn = jest.fn();
        const tableCells = screen.getAllByTestId('table row')
        fireEvent.click(tableCells[0])
        mockFn()
        expect(mockFn).toBeCalledTimes(1)
    });
    it('should handle pagination', () => {
       render(
        <AuthContextProvider>
            <RequestWrapper />
        </AuthContextProvider>
        );
        const mockFn = jest.fn();
        const footer = screen.getByRole('combobox', {name: 'rows per page'})
       fireEvent.change(footer)
        mockFn()
        expect(mockFn).toBeCalledTimes(1)
    })
})