import React, {useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { X } from 'phosphor-react';
import {ElevatedButton, TextButton} from './buttons';
import { TextInputField } from './InputField';
import { GroupProvider, useGroupContext } from '../context/GroupContext';
import BasicTimePicker from './TimePicker';
import { Dayjs } from 'dayjs';
import { MenuItem, Select } from '@mui/material';
import { areDayPropsEqual } from '@mui/x-date-pickers/internals';

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    sx?: any;
    children?: any;
}

const examples: string[] = ['Bathroom', 'Computer', 'Game Console']


export default function AddShareableDialog(props: DialogProps) {
  let {dialogPage, setDialogPage} = useGroupContext();

  const onNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDialogPage(1);
  }

  const onCreateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.handleClose();
  }

  return <Dialog
        onClose={props.handleClose}
        open={props.open}
        fullWidth={true}
        maxWidth='lg'
        sx={{
          backdropFilter: "blur(5px)"
        }}   
      >
        {
          dialogPage === 0 ? <AddShareablePage1 onNextClick={onNextClick} handleClose={props.handleClose} /> : <AddShareablePage2 onCreateClick={onCreateClick} handleClose={props.handleClose} />
        }
      </Dialog>
}

function AddShareablePage1 (props: {onNextClick: any, handleClose: any}) {
  let {newShareableName, setNewShareableName} = useGroupContext(); 

  const onSubmit = () => {}

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewShareableName(e.target.value);
    e.preventDefault();
  }

  const onExampleClick = (event: React.MouseEvent<HTMLButtonElement>, example: string) => {
    event.preventDefault();
    setNewShareableName(example);
  }

  return <>
  <div className='content'>
    <TextInputField value={newShareableName} onSubmit={onSubmit} onInputChange={onInputChange} placeholder='Enter anything which is shareable' />
    <p>For example,</p>
    <div className='examples'>
      {
        examples.map(e => <ElevatedButton key={e} onClick={(event) => onExampleClick(event, e)} backgroundColor="#f5f5f5" color="black" sx={{width: '140px', height: '42px', margin: '16px'}}>{e}</ElevatedButton>)
      }
    </div>
  </div>
  <DialogActions sx={{marginRight: '20px', marginBottom: '20px'}}>
      <TextButton onClick={props.handleClose} >
          Cancel
      </TextButton>
      <ElevatedButton onClick={props.onNextClick} >
          Next
      </ElevatedButton>
  </DialogActions>
  <style jsx>{`
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5%;
      {/* padding: 60px; */}
    }

    .examples {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    p {
      color: #808080;
      font-size: 24px;
      font-weight: 300;
      margin: 80px 0;
    }
  `}</style>
  </>
}

function AddShareablePage2 (props: {onCreateClick: any, handleClose: any}) {
  let {newShareableName, setNewShareableName} = useGroupContext(); 
  const [beginTime, setBeginTime] = useState(Dayjs);
  const [endTime, setEndTime] = useState(Dayjs);
  const [timeZone, setTimeZone] = useState('');

  const onSubmit = () => {}

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewShareableName(e.target.value);
    e.preventDefault();
  }

  const onExampleClick = (event: React.MouseEvent<HTMLButtonElement>, example: string) => {
    event.preventDefault();
    setNewShareableName(example);
  }

  const onBeginTimeChange = (val: Dayjs | null) => {
    if (val !== null) {
      // setBeginTime(val);
    }
  }

  const onEndTimeChange = (val: Dayjs | null) => {
    if (val !== null) {
      // setBeginTime(val);
    }
  }

  const handleTimeZoneChange = (e: any) => {
    setTimeZone(e.target.value);
  }

  return <>
  <div className='content'>
    <h2>Which times will your shareable be used?</h2>
    <div className='time'>
      <div>
        <p>No earlier than:</p>
        <BasicTimePicker onChange={onBeginTimeChange}/>
      </div>
      <div>
        <p>No later than:</p>
        <BasicTimePicker onChange={onEndTimeChange}/>
      </div>
    </div>
    <div className='time-zone'>
      <p>Time zone:</p>
      <Select value={timeZone} onChange={handleTimeZoneChange} renderValue={(selected) => {
        if (selected.length === 0) {
          return <span style={{color: '#aaaaaa', fontWeight: 'normal',}}>Select</span>;
        } else {
          return <span>{selected}</span>
        }
      }} sx={{minWidth: '100px', color: 'black', '::placeholder': {color: 'black'}}}>
        <MenuItem value="Asia/Seoul">Asia/Seoul</MenuItem>
      </Select>
    </div>
  </div>
  <DialogActions sx={{marginRight: '20px', marginBottom: '20px'}}>
      <TextButton onClick={props.handleClose} >
          Cancel
      </TextButton>
      <ElevatedButton onClick={props.onCreateClick} >
          Create
      </ElevatedButton>
  </DialogActions>
  <style jsx>{`
    h2{
      font-size: 24px;
      font-weight: 300;
      align-self: start;
      margin: 0 0 32px 0;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5%;
      {/* padding: 60px; */}
    }

    .time {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }

    .time > div {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
    }

    .time-zone {
      display: flex;
      align-self: start; 
      flex-direction: column;
      align-items: start;
      margin-top: 20px;
    }
    p {
      color: black;
      font-size: 16px;
      font-weight: 600;
      margin: 20px 0;
    }
  `}</style>
</>
}