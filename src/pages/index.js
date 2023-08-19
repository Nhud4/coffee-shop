'use client';

import React from 'react';
import Navigation from '@/components/navigasi/Navigasi';
import CardLayout from '@/components/card/CardHome';
import CardMenu from '@/components/card/CardMenu';
import CardAbout from '@/components/card/CardAbout';

export default function Home() {
  return (
    <div>
      <Navigation page={'home'}/>

      <CardLayout />

      <CardMenu />

      <CardAbout />
    </div>
  );
}
