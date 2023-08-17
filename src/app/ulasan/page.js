import React from 'react';
import Navigation from '@/component/navigasi/Navigasi';
import TambahUlasan from '@/component/form/TambahUlasan';

export default function Ulasan(){
  return (
    <div>
      <Navigation page="ulasan"/>

      <TambahUlasan />
    </div>
  );
}
