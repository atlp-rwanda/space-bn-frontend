import React from 'react';
import UserRole from '../views/UserRole';
import { render, cleanup,fireEvent} from '@testing-library/react';
import AuthContextProvider from '../contexts/AuthContext';
import Table from '../views/facilities/table'
import Container from '../views/facilities/dashBoardContainer'
import TablePagination from '@material-ui/core/TablePagination';
import {BrowserRouter} from 'react-router-dom';

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

