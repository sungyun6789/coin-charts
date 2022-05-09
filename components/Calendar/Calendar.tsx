import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  selected: Date | undefined;
  setSelected: (selected: Date | undefined) => void;
}

const Calendar = ({ selected, setSelected }: Props) => {
  return <DatePicker selected={selected} onChange={(date: Date) => setSelected(date)} />;
};

export default Calendar;
