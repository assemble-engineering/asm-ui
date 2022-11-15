import {useState} from 'react';
import {TimePicker} from "../TimePicker"
import {Label} from "../../Label"
import {InputWrapper} from "../InputWrapper"

type TimeRangeProps = {
  initialTimeStart: Date;
  timeStartId: string;
  timeStartName: string;
  timeStartLabel: string;
  timeStartError?: string;
  initialTimeEnd: Date;
  timeEndId: string;
  timeEndName: string;
  timeEndLabel: string;
  timeEndError?: string;
  required?: boolean;
  onChange?: ([initial, end]: Date[]) => void;
  isClearable?: boolean;
}

export const TimeRange = ({
  timeStartId = 'time-range-start',
  timeStartLabel = 'Start time',
  timeStartName = 'time-range-start',
  timeStartError,
  timeEndId = 'time-range-end',
  timeEndLabel = 'End time',
  timeEndName = 'time-range-end',
  timeEndError,
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
      <InputWrapper
        htmlFor={timeStartId}
        label={timeStartLabel}
        required={required}
        errorText={timeStartError}
      >
        <TimePicker
          id={timeStartId}
          name={timeStartName}
          initialValue={initialTimeStart}
          onChange={handleStartChange}
          required={required}
          inputCaption={timeStartLabel}
          isClearable={isClearable}
        />
      </InputWrapper>
      <InputWrapper
        htmlFor={timeEndId}
        label={timeEndLabel}
        required={required}
        errorText={timeEndError}
      >
        <TimePicker
          id={timeEndId}
          name={timeEndName}
          initialValue={initialTimeEnd}
          onChange={handleEndChange}
          required={required}
          inputCaption={timeEndLabel}
          isClearable={isClearable}
        />
      </InputWrapper>
    </>

  )
}

export default TimeRange
