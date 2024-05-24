import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { Button } from 'react-bootstrap';
import './basicDatePicker.css';

interface BasicDatePickerProps {
  currentDate: Dayjs;
  onDateChange: (date: Dayjs) => void;
}

export default function BasicDatePicker({ currentDate, onDateChange }: BasicDatePickerProps) {
  const handlePreviousMonth = () => {
    onDateChange(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    onDateChange(currentDate.add(1, 'month'));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="date-picker-container">
        <Button variant="secondary" size="sm" onClick={handlePreviousMonth}>&lt;</Button>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker
            openTo="month"
            views={['year', 'month']}
            value={currentDate}
            onChange={(date) => {
              if (date) {
                onDateChange(date);
              }
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <div className="date-picker-input" ref={inputRef}>
                <input {...inputProps} />
                {InputProps?.endAdornment}
              </div>
            )}
          />
        </DemoContainer>
        <Button variant="secondary" size="sm" onClick={handleNextMonth}>&gt;</Button>
      </div>
    </LocalizationProvider>
  );
}
