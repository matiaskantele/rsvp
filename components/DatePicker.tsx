import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DateRangePicker, FocusedInputShape } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components';

const StylingWrapper = styled.div`
  border: 0.2rem solid ${(props): string => props.theme.lightgrey};
  border-radius: 0.2rem;
  &:focus-within {
    border: 0.2rem solid ${(props): string => props.theme.black};
  }
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
      color: ${(props): string => props.theme.placeholder};
    }
    & .DateInput {
      width: 100%;
    }
    & .DateInput_input {
      font-family: 'Montserrat';
      line-height: 1;
      text-align: center;
    }
    & .DateInput_fang {
      left: calc(50% - 1rem);
    }
    & > .DateRangePicker_picker {
      left: calc(50% - 147px) !important;
      @media (min-width: 600px) {
        left: calc(50% - 309px) !important;
      }
    }
  }
`;

interface DateRangeProps {
  staying: { arriving: moment.Moment; departing: moment.Moment };
  onSelect(_: { arriving: moment.Moment; departing: moment.Moment }): void;
}

const DateRange: React.FC<DateRangeProps> = ({
  staying,
  onSelect,
}: DateRangeProps) => {
  const { t, i18n } = useTranslation();
  const [focusedInput, setFocusedInput] = useState(null);

  moment.locale(i18n.language);

  const weddingDate = moment('2021-07-14 17:00:00', moment.ISO_8601);

  return (
    <StylingWrapper>
      <DateRangePicker
        startDate={staying.arriving}
        startDateId={t('arriving')}
        endDate={staying.departing}
        endDateId={t('departing')}
        onDatesChange={({ startDate, endDate }): void => {
          onSelect({
            arriving: startDate,
            departing: endDate,
          });
        }}
        focusedInput={focusedInput}
        onFocusChange={(fi: FocusedInputShape): void => setFocusedInput(fi)}
        orientation={
          document.documentElement.clientWidth > 600 ? 'horizontal' : 'vertical'
        }
        firstDayOfWeek={1}
        minimumNights={0}
        startDatePlaceholderText={t('arriving')}
        endDatePlaceholderText={t('departing')}
        displayFormat="D.M.YYYY"
        initialVisibleMonth={(): moment.Moment => weddingDate}
        readOnly
      />
    </StylingWrapper>
  );
};

export default DateRange;
