'use client';

import React from 'react';
import Image from 'next/image';

export default function CardAbout(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 pt-10 pb-6">
      <div className="space-y-4 md:pl-[5rem]">
        <h1 className="text-[3rem] font-bold text-nero-40">
            Cerita Kami
        </h1>
        <div className="text-justify space-y-4 opacity-50">
          <p>
            Dimulai dari satu outlet kecil di depan satu minimarket di kota Surabaya, kami berkembang menjadi jaringan kedai kopi nasional dengan cabang tersebar di banyak kota di Indonesia.
          </p>
          <p>
            Di tahun 2012, kami adalah pionir dan penggagas dalam gerakan bangga terhadap kopi Indonesia dengan kampanye `Yes I Drink Indonesian Coffee.`
          </p>
          <p>
            Di tahun 2017, kami mendapatkan Penghargaan Indonesia Franchise Award dari kementerian Perdagangan sebagai Pemenang Nasional. Penghargaan ini serta diserahkan langsung oleh bapak Presiden RI Joko Widodo.
          </p>
        </div>
      </div>
      <Image src={require('@/image/IMG_BG.png')} alt="image1" />
    </div>
  );
}
