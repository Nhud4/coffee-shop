'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChartHome() {
  const data = {
    labels: ['Tidak Puas', 'Puas'],
    datasets: [
      {
        data: [5, 15],
        backgroundColor: [
          'rgba(255, 117, 85, 1)',
          'rgba(35, 123, 159, 1)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return(
    <>
      <div className="py-4 px-2 rounded-lg bg-white shadow-1">
        <Doughnut
          data={data}
          options={{
            plugins:{
              legend: {
                display: false
              }
            }
          }}
        />
        <div className="flex justify-between items-center mt-8 px-4">
          <div className="border border-nero-20 rounded-md text-sm px-4 py-2">
            <div className="text-center font-medium">5 Pelanggan</div>
            <div className="flex items-center">
              <div className="bg-primary-10 w-3 h-3 rounded-full mr-2"/>
              <div className="text-primary-10">Puas</div>
            </div>
          </div>
          <div className="border border-nero-20 rounded-md text-sm px-4 py-2">
            <div className="text-center font-medium">15 Pelanggan</div>
            <div className="flex items-center">
              <div className="bg-danger-10 w-3 h-3 rounded-full mr-2"/>
              <div className="text-danger-10">Tidak Puas</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
