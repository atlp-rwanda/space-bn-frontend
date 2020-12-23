import React from 'react';
import { IconButton, Checkbox, Fab }from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const createData = (id, requester, reason, destination, accommodation, status, action) => {
    return { id, requester, reason, destination, accommodation, status, action}
};


const buttons = <div style={{display: 'flex', flexDirection: 'row'}}>
                  <Fab color="primary" aria-label="edit" style={{width: 35,height: 30, marginRight: 10,}}><EditIcon style={{width: 20, height: 20,}}/></Fab>
                  <IconButton color="secondary" aria-label="delete" style={{width: 35,height: 35,}}><DeleteIcon style={{width: 25, height: 25,}}/></IconButton>                 
                </div>;

export const id = ['1A2T3BED']


const ids = [
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Checkbox />
      <span style={{marginTop: '12px'}}>{id[0]}</span>
    </div>,
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Checkbox />
      <span style={{marginTop: '12px'}}>{id[1]}</span>
    </div>,
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Checkbox />
      <span style={{marginTop: '12px'}}>{id[2]}</span>
    </div>,
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Checkbox />
      <span style={{marginTop: '12px'}}>{id[3]}</span>
    </div>,
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Checkbox />
      <span style={{marginTop: '12px'}}>{id[4]}</span>
    </div>,
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Checkbox />
      <span style={{marginTop: '12px'}}>{id[5]}</span>
    </div>,
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Checkbox />
      <span style={{marginTop: '12px'}}>{id[6]}</span>
    </div>,
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Checkbox />
      <span style={{marginTop: '12px'}}>{id[7]}</span>
    </div>,
];

export const rows = [
    createData(ids[0], 'Software Engineer', 'Integrated Sytems Training', 'Rwanda, Kigali', 'Mariot Hotel', 'Pending',buttons,),
    createData(ids[1], 'Software Engineer', 'Integrated Sytems Training', 'Rwanda, Kigali', 'Mariot Hotel', 'Pending',buttons,),
    createData(ids[2], 'Software Engineer', 'Integrated Sytems Training', 'Rwanda, Kigali', 'Mariot Hotel', 'Pending',buttons,),
    createData(ids[3], 'Software Engineer', 'Integrated Sytems Training', 'Rwanda, Kigali', 'Mariot Hotel', 'Pending',buttons,),
    createData(ids[4], 'Software Engineer', 'Integrated Sytems Training', 'Rwanda, Kigali', 'Mariot Hotel', 'Pending',buttons,),
    createData(ids[5], 'Software Engineer', 'Integrated Sytems Training', 'Rwanda, Kigali', 'Mariot Hotel', 'Pending',buttons,),
    createData(ids[6], 'Software Engineer', 'Integrated Sytems Training', 'Rwanda, Kigali', 'Mariot Hotel', 'Pending',buttons,),
    createData(ids[7], 'Software Engineer', 'Integrated Sytems Training', 'Rwanda, Kigali', 'Mariot Hotel', 'Pending',buttons,),
]