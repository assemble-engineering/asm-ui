import {useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {TimePicker} from "../TimePicker"

type TimeRangeProps = {
  initialTimeStart: Date;
  timeStartId: string;
  timeStartName: string;
  timeStartLabel: string;
  timeStartInputCaption?: string;
  timeStartError?: string;
  timeStartErrorClassName?: string;
  initialTimeEnd: Date;
  timeEndId: string;
  timeEndName: string;
  timeEndLabel: string;
  timeEndInputCaption?: string;
  timeEndError?: string;
  timeEndErrorClassName?: string;
  required?: boolean;
  onChange?: ([initial, end]: Date[]) => void;
  isClearable?: boolean;
}

export const TimeRange = ({
  timeStartId = 'time-range-start',
  timeStartLabel = 'Start time',
  timeStartName = 'time-range-start',
  timeStartInputCaption,
  timeStartError,
  timeStartErrorClassName,
  timeEndId = 'time-range-end',
  timeEndLabel = 'End time',
  timeEndName = 'time-range-end',
  timeEndInputCaption,
  timeEndError,
  timeEndErrorClassName,
  initialTimeStart,
  initialTimeEnd,
  required,
  onChange,
  isClearable
}: TimeRangeProps) => {
  const [range, setRange] = useState([initialTimeStart, initialTimeEnd])

  const handleStartChange = (date: Date) => {
    setRange(prev => [date, prev[1]]);
    onChange && onChange(range);
  }

  const handleEndChange = (date: Date) => {
    setRange(prev => [prev[0], date]);
    onChange && onChange(range);
  }

  return (
    <>
      <TimePicker
        id={timeStartId}
        name={timeStartName}
        initialValue={initialTimeStart}
        onChange={handleStartChange}
        required={required}
        label={timeStartLabel}
        inputCaption={timeStartInputCaption}
        isClearable={isClearable}
        error={timeStartError}
        errorClassName={timeStartErrorClassName}
      />
      <TimePicker
        id={timeEndId}
        name={timeEndName}
        initialValue={initialTimeEnd}
        onChange={handleEndChange}
        required={required}
        label={timeEndLabel}
        inputCaption={timeEndInputCaption}
        isClearable={isClearable}
        error={timeEndError}
        errorClassName={timeEndErrorClassName}
      />
    </>

  )
}

export default TimeRange
