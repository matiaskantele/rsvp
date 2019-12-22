import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import styled from "styled-components";

const StylingWrapper = styled.div`
  margin: 0 0 2rem 2rem;
  border: 0.2rem solid ${props => props.theme.lightgrey};
  border-radius: 0.2rem;
  & .DateRangePicker {
    width: 100%;
  }
  & .DateRangePickerInput {
    border: none;
    background: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &::placeholder {
      color: ${props => props.theme.placeholder};
    }
    & .DateInput_input {
      font-family: "Montserrat";
      color: inherit;
      line-height: 1;
      width: 100%;
    }
    & .DayPicker_focusRegion {
      margin: 0 auto;
    }
    & .DateRangePicker_picker {
      left: calc(50% - 309px);
    }
  }
`;

const DateRange = ({ context }) => {
  const { t } = useTranslation();
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    console.log("Hello fellow nerd!");
    console.log(
      "The warnings here are caused by react-dates wanting to support older versions of React."
    );
  }, []);

  return (
    <StylingWrapper>
      <DateRangePicker
        startDate={context.values.staying.arriving}
        startDateId="your_unique_start_date_id"
        endDate={context.values.staying.departing}
        endDateId="your_unique_end_date_id"
        onDatesChange={({ startDate, endDate }) => {
          context.setFieldValue("staying", {
            arriving: startDate,
            departing: endDate,
          });
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        orientation={
          document.documentElement.clientWidth > 685 ? "horizontal" : "vertical"
        }
        firstDayOfWeek={1}
        minimumNights={0}
        startDatePlaceholderText={t("arriving")}
        endDatePlaceholderText={t("departing")}
        displayFormat={"D.M.YYYY"}
        initialVisibleMonth={() =>
          moment("2020-05-03 17:00:00", moment.ISO_8601)
        }
      />
    </StylingWrapper>
  );
};

export default DateRange;
