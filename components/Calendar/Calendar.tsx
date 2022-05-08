import { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [selected, setSelected] = useState<Date>();

  return <DatePicker selected={selected} onChange={(date: Date) => setSelected(date)} />;
};

export default Calendar;
