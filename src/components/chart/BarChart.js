'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = [
  'Produk',
  'Pelayanan',
  'Harga',
  'Tempat',
  'Promosi'
];

export function BarChartHome() {
  const data = {
    labels,
    datasets: [
      {
        label: 'Puas',
        data: [10, 20, 30, 10, 20,],
        backgroundColor: 'rgba(31, 40, 85, 1)',
      },
      {
        label: 'Tidak Puas',
        data: [30, 10, 20, 30, 40,],
        backgroundColor: 'rgba(0, 147, 173, 1)',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-1">
      <Bar options={options} data={data} />
    </div>
  );
}
