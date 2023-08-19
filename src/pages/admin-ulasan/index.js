'use client';

import React from 'react';
import NavigationDashboard from '@/components/navigasi/NavigasiDashboard';
import TableVocher from '@/components/table/TableVocher';

export default function AdminUlasan(){
  return (
    <div>
      <NavigationDashboard page={'dataUlasan'}/>
      <div className="my-6 mx-4 bg-white rounded-lg shadow-1 p-4">
        <h1 className="text-3xl font-bold text-cyn-20 mb-4">Data Vocher Pelanggan</h1>

        <TableVocher />
      </div>
    </div>
  );
}
