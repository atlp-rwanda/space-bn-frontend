import React from 'react';
import SearchBar from 'material-ui-search-bar';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    search: {
        background: '#F4F4F4',
        width: '80%',
        marginBottom: 20,
        margin: 'auto'
    }
}))

const SearchBox = ({HandleSearch, prop, value}) => {
    const classes = useStyles();

    const HandleOnRequestSearch = () => {
        //do some implementations
    }
    return (
            <SearchBar
            onChange={HandleSearch}
            onRequestSearch={HandleOnRequestSearch}
            placeholder={prop}
            value={value}
            className={classes.search}
            inputProps={{ "data-testid": "content-input" }}
            />          
     );
}
 
export default SearchBox;