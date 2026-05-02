import { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const generateData = () => {
  const data = [];
  let better = 1;
  let worse = 1;
  for (let day = 0; day <= 365; day += 5) {
    data.push({
      day,
      better: parseFloat(better.toFixed(2)),
      worse: parseFloat(worse.toFixed(2)),
    });
    // In reality, it's 1.01^day, but for visual rhythm we skip days
    better = Math.pow(1.01, day);
    worse = Math.pow(0.99, day);
  }
  return data;
};

const data = generateData();

export default class CompoundingChart extends PureComponent {
  render() {
    return (
      <div className="w-full h-[400px] bg-white/5 p-4 rounded-xl border border-white/10" id="compounding-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="day" 
              name="Day" 
              stroke="#888" 
              fontSize={12}
              label={{ value: 'Days', position: 'insideBottomRight', offset: -10, fill: '#888' }}
            />
            <YAxis 
              stroke="#888" 
              fontSize={12}
              label={{ value: 'Performance', angle: -90, position: 'insideLeft', fill: '#888' }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend verticalAlign="top" height={36}/>
            <Line
              type="monotone"
              dataKey="better"
              name="1% Better Daily"
              stroke="#10b981"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line 
              type="monotone" 
              dataKey="worse" 
              name="1% Worse Daily"
              stroke="#ef4444" 
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
