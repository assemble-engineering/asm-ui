'use client'
import {useState} from 'react';
import {TimePicker} from "./TimePicker"
import "./react-datepicker-styles.css";

export type TimeRangeProps = {
  initialStartTime?: Date;
  timeStartId: string;
  timeStartLabel: string;
  timeStartInputCaption?: string;
  timeStartError?: string;
  timeStartErrorClassName?: string;
  initialEndTime?: Date;
  timeEndId: string;
  timeEndLabel: string;
  timeEndInputCaption?: string;
  timeEndError?: string;
  timeEndErrorClassName?: string;
  required?: boolean;
  onChange?: ([initial, end]: Date[]) => void;
  isClearable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const TimeRange = ({
  timeStartId = 'time-range-start',
  timeStartLabel = 'Start time',
  timeStartInputCaption,
  timeStartError,
  timeStartErrorClassName,
  timeEndId = 'time-range-end',
  timeEndLabel = 'End time',
  timeEndInputCaption,
  timeEndError,
  timeEndErrorClassName,
  initialStartTime = new Date(),
  initialEndTime = new Date(),
  required,
  onChange,
  isClearable,
  className,
  style
}: TimeRangeProps) => {
  const [range, setRange] = useState([initialStartTime, initialEndTime])

  const handleStartChange = (date: Date) => {
    setRange(prev => [date, prev[1]]);
    onChange && onChange(range);
  }

  const handleEndChange = (date: Date) => {
    setRange(prev => [prev[0], date]);
    onChange && onChange(range);
  }

  return (
    <div style={style}>
      <TimePicker
        id={timeStartId}
        initialDate={initialStartTime}
        onChange={handleStartChange}
        required={required}
        label={timeStartLabel}
        inputCaption={timeStartInputCaption}
        isClearable={isClearable}
        error={timeStartError}
        errorClassName={timeStartErrorClassName}
        className={className}
      />
      <TimePicker
        id={timeEndId}
        initialDate={initialEndTime}
        onChange={handleEndChange}
        required={required}
        label={timeEndLabel}
        inputCaption={timeEndInputCaption}
        isClearable={isClearable}
        error={timeEndError}
        errorClassName={timeEndErrorClassName}
        className={className}
      />
    </div>
  )
}
