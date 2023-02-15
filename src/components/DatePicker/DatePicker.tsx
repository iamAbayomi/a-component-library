import React, { FC, useState } from "react";
import { DatePicker as DatePickerLibrary } from "./DatePickerLibrary/DatePickerLibrary";
import "react-datepicker/dist/react-datepicker.css";
import { Box } from "@chakra-ui/react";

interface props {
  maxDate?: Date;
  selectRange?: boolean;
  customDateInput?: any;
}

const DatePicker: FC<props> = ({ maxDate, selectRange, customDateInput }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function onDateChange(date: any) {
    const [start_date, end_date] = date;
    setStartDate(start_date);
    setEndDate(end_date);
  }

  return (
    <Box>
      <DatePickerLibrary
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        selectsRange={selectRange}
        maxDate={maxDate ?? new Date()}
        onChange={onDateChange}
        customInput={customDateInput}
      />
    </Box>
  );
};

export default DatePicker;
