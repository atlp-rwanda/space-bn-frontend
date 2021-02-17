import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Button, Tooltip } from '@material-ui/core';
import { useTranslation } from "react-i18next";

const LinksFnc = (props) =>{
    const { t } = useTranslation();
    return [
      {
          url: '/about',
          text: t('About Us'),
      },
      {
          url: '/faq',
          text: t('FAQ'),
      },
      {
          url: '/booking',
          text: t('Booking'),
      },
      {
          url: '/contact',
          text: t('Contact Us'),
      },
      {
          text:<Tooltip title={props} aria-label="username" placement="bottom"> 
                  <Button color="primary">
                      <AccountCircleIcon style={{width: 50, height: 50,}} />
                  </Button>
              </Tooltip> 
      },
  ];
  }

export default LinksFnc