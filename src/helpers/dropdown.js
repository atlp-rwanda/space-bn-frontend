import React, { useEffect, useState } from 'react';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from "react-i18next";


const useStyles = makeStyles((theme) => ({
    select: {
        '&:before': {
            borderColor: ' #DADADA'
        },
        '&:after': {
            borderColor: ' #DADADA',
        },
        margin: theme.spacing(2),
        minWidth: 120,
        border: '1px solid #DADADA',
        borderRadius: 5,
        textAlign: 'center'
    },
    icon: {
        fill: '#5E5E5E',
    },
  }));
  
const Dropdown = () => {
    const classes = useStyles();
    const [language, setLanguage] = useState('en');
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value)
        i18n.changeLanguage(e.target.value)
    }
    useEffect(() => {
        const currentLng = localStorage.getItem('i18nextLng');
        setLanguage(currentLng)
    },[])
    return ( 
        <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={language}
        onChange={handleChangeLanguage}
        className={classes.select}
        inputProps={{
            classes: {
                icon: classes.icon
            },
            "data-testid":"select-language"
        }}
        >
        <MenuItem value={'en'}>{t('english')}</MenuItem>
        <MenuItem value={'fr'}>{t('french')}</MenuItem>
        <MenuItem value={'rw'}>{t('kinyarwanda')}</MenuItem>
        <MenuItem value={'sw'}>{t('swahili')}</MenuItem>
        </Select>
     );
}
 
export default Dropdown;