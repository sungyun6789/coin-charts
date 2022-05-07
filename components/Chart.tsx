import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import mock from '../mock';

const Chart = () => {
  return (
    <LineChart width={1000} height={500} data={mock}>
      <XAxis dataKey={undefined} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 6 }} />
    </LineChart>
  );
};

export default Chart;