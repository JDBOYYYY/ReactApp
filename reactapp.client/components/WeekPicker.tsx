/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import 'dayjs/locale/en-gb';
import { useConfig } from '../src/ConfigContext';

dayjs.extend(isBetweenPlugin);
dayjs.locale('en-gb'); // Setting the locale to 'en-gb' which starts the week on Monday

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  isSelected: boolean;
  isHovered: boolean;
  primaryColor: string;
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== 'isSelected' && prop !== 'isHovered' && prop !== 'primaryColor',
})<CustomPickerDayProps>(({ theme, isSelected, isHovered, primaryColor, day }) => ({
  borderRadius: 0,
  ...(isSelected && {
    backgroundColor: theme.palette[primaryColor].main,
    color: theme.palette[primaryColor].contrastText,
    '&:hover, &:focus': {
      backgroundColor: theme.palette[primaryColor].main,
    },
  }),
  ...(isHovered && {
    backgroundColor: theme.palette[primaryColor][theme.palette.mode],
    '&:hover, &:focus': {
      backgroundColor: theme.palette[primaryColor][theme.palette.mode],
    },
  }),
  ...(day.day() === 1 && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(day.day() === 0 && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
})) as React.ComponentType<CustomPickerDayProps>;

const isInSameWeek = (dayA: Dayjs, dayB: Dayjs | null | undefined) => {
  if (dayB == null) {
    return false;
  }
  return dayA.isSame(dayB, 'week');
};

function Day(
  props: PickersDayProps<Dayjs> & {
    selectedDay?: Dayjs | null;
    hoveredDay?: Dayjs | null;
    primaryColor: string;
  },
) {
  const { day, selectedDay, hoveredDay, primaryColor, ...other } = props;
  return (
    <CustomPickersDay
      {...other}
      day={day}
      sx={{ px: 2.5 }}
      disableMargin
      selected={false}
      isSelected={isInSameWeek(day, selectedDay)}
      isHovered={isInSameWeek(day, hoveredDay)}
      primaryColor={primaryColor}
    />
  );
}

export default function WeekPicker({ selectedDate, setSelectedDate }: { selectedDate: Date, setSelectedDate: (date: Date) => void }) {
  const { primaryColor } = useConfig();
  const [hoveredDay, setHoveredDay] = React.useState<Dayjs | null>(null);
  const [currentMonth, setCurrentMonth] = React.useState<Dayjs>(dayjs(selectedDate));

  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      console.log('Date selected:', newValue.toDate());
      setSelectedDate(newValue.toDate());
      setCurrentMonth(dayjs(newValue)); // Update currentMonth when date changes
    }
  };

  const handleMonthChange = (newMonth: Dayjs) => {
    setCurrentMonth(newMonth);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'}>
      <DateCalendar
        value={currentMonth}
        onChange={handleDateChange}
        onMonthChange={handleMonthChange}
        showDaysOutsideCurrentMonth
        displayWeekNumber
        slots={{ day: Day }}
        slotProps={{
          day: (ownerState) =>
            ({
              selectedDay: dayjs(selectedDate),
              hoveredDay,
              primaryColor,
              onPointerEnter: () => setHoveredDay(ownerState.day),
              onPointerLeave: () => setHoveredDay(null),
            }) as any,
        }}
      />
    </LocalizationProvider>
  );
}
