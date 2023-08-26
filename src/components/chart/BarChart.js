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

export function BarChartHome({ value }) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Puas',
        data: [
          value?.puasProduk || 0,
          value?.puasPelayanan || 0,
          value?.puasHarga || 0,
          value?.puasTempat || 0,
          value?.puasPromosi || 0,
        ],
        backgroundColor: 'rgba(31, 40, 85, 1)',
      },
      {
        label: 'Tidak Puas',
        data: [
          value?.tidakProduk || 0,
          value?.tidakPelayanan || 0,
          value?.tidakHarga || 0,
          value?.tidakTempat || 0,
          value?.tidakPromosi || 0,
        ],
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
