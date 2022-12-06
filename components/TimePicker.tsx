import * as React from 'react';
import type {} from '@mui/x-date-pickers/themeAugmentation';
// import type {} from '@mui/x-date-pickers-pro/themeAugmentation';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { NodeNextRequest } from 'next/dist/server/base-http/node';

interface TimePickerProps {
    label?: string;
    onChange: (val: Dayjs | null) => void;
}

export default function BasicTimePicker(props: TimePickerProps) {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        inputFormat="hh:mm a"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          if (props.onChange !== null) {
            props.onChange!(newValue);
          }
        }}
        renderInput={(params) => <TextField {...params} sx={{
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        }}/>}
        />
    </LocalizationProvider>
  );
}