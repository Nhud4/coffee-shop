'use client';

import React from 'react';
import Navigation from '@/components/navigasi/Navigasi';
import TambahUlasan from '@/components/form/TambahUlasan';

export default function Ulasan(){
  return(
    <div>
      <Navigation page={'ulasan'}/>

      <TambahUlasan />
    </div>
  );
}
