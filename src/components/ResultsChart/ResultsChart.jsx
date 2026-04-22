import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { "id": 1, "name": "Ayaan", "physics": 85, "chemistry": 78, "math": 92 },
  { "id": 2, "name": "Rahim", "physics": 72, "chemistry": 70, "math": 75 },
  { "id": 3, "name": "Karim", "physics": 90, "chemistry": 88, "math": 94 },
  { "id": 4, "name": "Nusrat", "physics": 88, "chemistry": 82, "math": 89 },
  { "id": 5, "name": "Sadia", "physics": 76, "chemistry": 74, "math": 80 },
  { "id": 6, "name": "Imran", "physics": 69, "chemistry": 65, "math": 71 },
  { "id": 7, "name": "Tania", "physics": 95, "chemistry": 91, "math": 97 },
  { "id": 8, "name": "Fahim", "physics": 81, "chemistry": 79, "math": 85 },
  { "id": 9, "name": "Mim", "physics": 74, "chemistry": 72, "math": 77 },
  { "id": 10, "name": "Jahid", "physics": 67, "chemistry": 69, "math": 70 }
]


const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;