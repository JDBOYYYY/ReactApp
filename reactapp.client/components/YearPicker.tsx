import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { Button } from 'react-bootstrap';
import './YearPicker.css';

interface YearPickerProps {
    currentDate: Dayjs;
    onDateChange: (date: Dayjs) => void;
}

export default function YearPicker({ currentDate, onDateChange }: YearPickerProps) {
    const handlePreviousYear = () => {
        onDateChange(currentDate.subtract(1, 'year'));
    };

    const handleNextYear = () => {
        onDateChange(currentDate.add(1, 'year'));
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="year-picker-container">
                <Button variant="secondary" size="sm" onClick={handlePreviousYear}>&lt;</Button>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        openTo="year"
                        views={['year']}
                        value={currentDate}
                        onChange={(date) => {
                        if (date) {
                            onDateChange(date);
                        }
                    }}
                    renderInput={({ inputRef, inputProps, InputProps }) => (
                        <div className="year-picker-input" ref={inputRef}>
                            <input {...inputProps} />
                            {InputProps?.endAdornment}
                        </div>
                    )}
                />
                </DemoContainer>
                <Button variant="secondary" size="sm" onClick={handleNextYear}>&gt;</Button>
            </div>
        </LocalizationProvider>
    );
}
