import React from 'react';
import Link from 'next/link';
import { removeToken } from '@/utils/server/localstorage';

export default function NavigationDashboard({ page }){
  const handleLogout = () => {
    removeToken();
  };

  return(
    <div className="flex justify-between items-center sticky top-0 bg-white h-16 px-6 font-semibold shadow-xl z-50">
      <h1 className="text-cyn-20">PERMAKKOPI</h1>
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
        <li className="text-white bg-cyn-20 px-3 py-1 rounded-md" onClick={handleLogout}>
          <Link href="/">
            Keluar
          </Link>
        </li>
      </ul>
    </div>
  );
}
