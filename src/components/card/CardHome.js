'use client';

import React from 'react';
import Image from 'next/image';

export default function CardLayout(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-6 px-2 mb-10 mt-4">
      <div className="md:mb-0 mb-8 md:col-span-2">
        <Image
          className="object-cover h-[31rem] w-full rounded-md hover:object-none shadow"
          src={require('@/assets/image/IMG_01.jpg')}
          alt="user"
        />
        <div className="-mt-[10rem] md:-mt-[6rem] px-2 text-white">
          <h1 className="text-2xl font-semibold">Kopi Alami</h1>
          <p className="opacity-70">
            Diseduh dengan segenap rasa yang ditungakan secara perlahan <br/>
            hingga mendapatkan rasa kopi dengan kekayaan alami
          </p>
        </div>
      </div>
      <div className="grid md:grid-rows-3 md:grid-cols-1 grid-rows-1 grid-cols-3 gap-2">
        <div className="h-40">
          <Image className="object-cover h-40 w-full rounded-md hover:object-none" src={require('@/assets/image/IMG_02.jpg')} alt="user" />
        </div>
        <div className="h-40">
          <Image className="object-cover h-40 w-full rounded-md hover:object-none" src={require('@/assets/image/IMG_03.jpg')} alt="user" />
        </div>
        <div className="h-40">
          <Image className="object-cover h-40 w-full rounded-md hover:object-none" src={require('@/assets/image/IMG_05.jpg')} alt="user" />
        </div>
      </div>
    </div>
  );
}
