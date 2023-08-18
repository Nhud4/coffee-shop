import React from 'react';
import Link from 'next/link';

export default function NavigationDashboard({ page }){
  return(
    <div className="flex justify-between items-center sticky top-0 bg-white h-16 px-6 font-semibold shadow-xl z-50">
      <h1 className="text-cyn-20">PERMAK COFFEE</h1>
      <ul className="flex items-center space-x-8">
        <li className={page === 'dashboard' ? 'text-cyn-20': 'text-nero-40 hover:text-cyn-20'}>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className={page === 'dataUlasan' ? 'text-cyn-20': 'text-nero-40 hover:text-cyn-20'}>
          <Link href="/admin-ulasan">
            Data Vocher
          </Link>
        </li>
        <li className="text-white bg-cyn-20 px-3 py-1 rounded-md">
          <Link href="/">
            Keluar
          </Link>
        </li>
      </ul>
    </div>
  );
}
