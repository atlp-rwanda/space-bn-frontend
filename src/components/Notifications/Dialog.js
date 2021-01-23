import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, DialogContent, Tooltip } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { useStyles } from '../../shared/styles/DialogStyles';
import Scroll from '../Scroll';
import { NotificationContext } from '../../contexts/NotificationContext';
import { formatTime } from '../../helpers/timeFormatter';

function NotificationPane(props) {
  const classes = useStyles();
  const { onClose, openNotification } = props;
  const [notifStatus, setNotifStatus] = useState('All');
  const [filteredNotif, setFilteredNotif] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const { _notifications } = useContext(NotificationContext);

  const handleSelect = (e) => {
    setNotifStatus(e.target.value)
  }
  const allNotifications = _notifications.savedNotifications
  const undefinedNotif = filteredNotif === undefined;
  useEffect(() => {
   setNotifications(allNotifications)
  },[allNotifications])

 useEffect(() => {
  switch (notifStatus) {
    case 'Read':
      setFilteredNotif(notifications.filter(notif => notif.status === 'read'))
        break;
    case 'Unread':
      setFilteredNotif(notifications.filter(notif => notif.status === 'unread'))
        break;
    default:
     setFilteredNotif(notifications)
  }
 },[notifStatus, notifications])
 
  return (
    <Dialog onClose={onClose} modal={false} aria-labelledby="simple-dialog-title" open={openNotification} classes={{ paper: classes.dialog }} role="dialog">
        <DialogContent className={classes.header}>
            <Typography id="simple-dialog-title" style={{fontWeight: 'bold'}}>Notifications</Typography>
            <div className={classes.selectContainer}>
                <select className={classes.select} value={notifStatus} onChange={handleSelect} data-testid="select">
                    <option>All</option>
                    <option>Unread</option>
                    <option>Read</option>
                </select>
                <Tooltip title='Mark all as read' aria-label='notification status' placement='top-center' className={classes.tooltip}>
                <DoneAllIcon className={classes.btn}/>
                </Tooltip>
            </div>
        </DialogContent>
        <Scroll height={'auto'}>
            {(undefinedNotif ? [] : filteredNotif).map(notification => (
                <Card className={notification.status === 'read' ? classes.read : classes.card}>
                    <CardContent className={classes.cardContent}>
                      <div>
                        <Typography color="textSecondary" style={{paddingBottom: 10}}>{notification.title}</Typography>
                        <a href={notification.link} className={classes.link}>{notification.message}</a>
                    </div>
                    <div className={classes.time}>
                        <Typography color="textSecondary">{formatTime(notification.createdAt)}</Typography>
                    </div>
                    </CardContent>
                </Card>
            ))}
        </Scroll>
    </Dialog>
  );
}

NotificationPane.propTypes = {
  onClose: PropTypes.func.isRequired,
  openNotification: PropTypes.bool.isRequired,
};

export default function NotificationDialog(props) {
  const { openNotification, setOpenNotification } = props;
 
  const handleClose = () => {
    setOpenNotification(false);
  };

  return (
    <Paper>
      <NotificationPane  openNotification={openNotification} onClose={handleClose}/>
    </Paper>
  );
}
