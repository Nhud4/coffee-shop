import React from 'react';
import Navigation from '@/component/navigasi/Navigasi';
import CardLayout from '@/component/card/CardHome';
import CardMenu from '@/component/card/CardMenu';
import CardAbout from '@/component/card/CardAbout';

export default function Home() {
  return (
    <div>
      <Navigation />

      <CardLayout />

      <CardMenu />

      <CardAbout />
    </div>
  );
}
