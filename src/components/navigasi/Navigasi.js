import React from 'react';
import Link from 'next/link';

export default function Navigation({ page }){
  return(
    <div className="flex justify-between items-center sticky top-0 bg-white h-16 px-6 font-semibold shadow-xl z-50">
      <h1 className="text-cyn-20">PERMAK COFFEE</h1>
      <ul className="flex items-center space-x-8">
        <li className={page === 'home' ? 'text-cyn-20': 'text-nero-40 hover:text-cyn-20'}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={page === 'ulasan' ? 'text-cyn-20': 'text-nero-40 hover:text-cyn-20'}>
          <Link href="/ulasan">
            Ulasan
          </Link>
        </li>
        <li className="text-nero-40 hover:text-cyn-20">
          <Link href="/login">
            Admin
          </Link>
        </li>
      </ul>
    </div>
  );
}
