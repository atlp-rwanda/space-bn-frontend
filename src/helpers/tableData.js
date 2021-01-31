import React from 'react';
import { Checkbox }from '@material-ui/core';

export const createData = (id, RequesterId, DateIn, DateOut, idRoom, status, action) => {
  return { id, RequesterId, DateIn, DateOut, idRoom, status, action}
// export const createData = (RequesterId, DateIn, DateOut, idRoom, status, action) => {
//     return { RequesterId, DateIn, DateOut, idRoom, status, action}
};

export const id = ['1A2T3BED']

export const ids = [
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

