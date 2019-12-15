import { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const dayPicker = props => {
  const [arrival, setArrival] = useState(null);
  const [departure, setDeparture] = useState(null);
  const [focusedInput, setFocusedInput] = useState(false);

  return (
    <DateRangePicker
      transitionDuration={0}
      startDateId="startDate"
      endDateId="endDate"
      startDate={arrival}
      endDate={departure}
      onDatesChange={({ arrival, departure }) => {
        setArrival(arrival);
        setDeparture(departure);
      }}
      focusedInput={focusedInput}
      onFocusChange={focusedInput => {
        setFocusedInput(focusedInput);
      }}
    />
  );
};

export default dayPicker;
