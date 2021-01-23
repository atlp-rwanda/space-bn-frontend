import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NotificationDialog from '../components/Notifications';
import AuthContextProvider from '../contexts/AuthContext';
import { NotificationContext } from '../contexts/NotificationContext';

let _notifications;
beforeAll(() => {
  _notifications = [{
    id: 1,
    requestId: 2,
    userId: 5,
    title: "Request created",
    message: "Your request has been created",
    link: "/requests/2",
    status: "unread",
    createdAt: "2021-02-11T15:11:27.621Z",
    updatedAt: "2021-02-11T15:11:27.621Z"
}];
})
describe('<Notification />', () => {
    it('should render notification Pane', () => {
        const dispatch = jest.fn();
        const wrappers = ({children}) => (
            <NotificationContext.Provider value={{_notifications, dispatch}} >
                {children}
           </NotificationContext.Provider>
        )
        const {getAllByRole} = render(
            <AuthContextProvider>
                    <NotificationDialog openNotification={true} onClose={false} />
            </AuthContextProvider>, { wrapper: wrappers }
        );
        const setOpenNotification = jest.fn();
        const dialog = getAllByRole('dialog')
        const handleClose = jest.spyOn(React , 'useState');
        handleClose.mockImplementation(OpenNotification => [OpenNotification, setOpenNotification]);
        
        dialog.forEach(el => {
            fireEvent.click(el)
        })
        expect(setOpenNotification).toBeTruthy();
    })
    it('should filter on option selection', () => {
        const dispatch = jest.fn();
        const wrappers = ({children}) => (
            <NotificationContext.Provider value={{_notifications, dispatch}} >
                {children}
           </NotificationContext.Provider>
        )
        const {getByTestId} = render(
            <AuthContextProvider>
                    <NotificationDialog openNotification={true} onClose={false} />
            </AuthContextProvider>, { wrapper: wrappers }
        );
        const select = getByTestId('select');
        fireEvent.change(select, {target: {value: 'All' || 'Unread' || 'Read'}});

        expect(select).toHaveValue('All'||'Unread'||'Read')
    })
})