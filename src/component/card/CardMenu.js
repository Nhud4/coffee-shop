'use client';

import React from 'react';
import Image from 'next/image';

export default function CardMenu(){
  return(
    <div className="flex flex-col justify-center items-center bg-white pt-10 pb-6">
      <div className="w-fit border-b-8 border-cyn-20 pb-4 mb-6">
        <h1 className="text-[3rem] font-bold text-center text-nero-40">
            Buku Menu
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <div className="space-y-4 px-2">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Coffee Menu</h1>
            <hr className="w-20 border-cyn-20 border-2"/>
          </div>
          <div className="flex justify-center items-center">
            <Image className="object-cover md:h-48 md:w-48 h-32 w-32 -mr-[6rem] z-10" src={require('@/image/IMG_05.jpg')} alt="image1" />
            <div className="md:pt-4 py-3 pl-[7rem] pr-3 md:space-y-4 bg-nero-10 w-full md:h-56 h-38 z-0">
              <h1 className="text-xl font-semibold text-cyn-20 tracking-widest">Expresso Coffee</h1>
              <ul className="opacity-50 tracking-wider">
                <li>
                  <p>Biji Kopi Arabica</p>
                </li>
                <li className="md:flex md:items-center md:space-x-2">
                  <p>Komposisi</p>
                  <p>Kopi Arabica 10g, Air Panas 20ml</p>
                </li>
                <li className="flex items-center space-x-2">
                  <p>Harga</p>
                  <p className="font-semibold">Rp.5.000</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image className="object-cover md:h-48 md:w-48 h-32 w-32 -mr-[6rem] z-10" src={require('@/image/IMG_05.jpg')} alt="image1" />
            <div className="md:pt-4 py-3 pl-[7rem] pr-3 md:space-y-4 bg-nero-10 w-full md:h-56 h-38 z-0">
              <h1 className="text-xl font-semibold text-cyn-20 tracking-widest">Expresso Coffee</h1>
              <ul className="opacity-50 tracking-wider">
                <li className="flex items-center space-x-2">
                  <p>Biji Kopi</p>
                  <p>Arabica</p>
                </li>
                <li className="md:flex md:items-center md:space-x-2">
                  <p>Komposisi</p>
                  <p>Kopi Arabica 10g, Air Panas 20ml</p>
                </li>
                <li className="flex items-center space-x-2">
                  <p>Harga</p>
                  <p className="font-semibold">Rp.5.000</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image className="object-cover md:h-48 md:w-48 h-32 w-32 -mr-[6rem] z-10" src={require('@/image/IMG_05.jpg')} alt="image1" />
            <div className="md:pt-4 py-3 pl-[7rem] pr-3 md:space-y-4 bg-nero-10 w-full md:h-56 h-38 z-0">
              <h1 className="text-xl font-semibold text-cyn-20 tracking-widest">Expresso Coffee</h1>
              <ul className="opacity-50 tracking-wider">
                <li className="flex items-center space-x-2">
                  <p>Biji Kopi</p>
                  <p>Arabica</p>
                </li>
                <li className="md:flex md:items-center md:space-x-2">
                  <p>Komposisi</p>
                  <p>Kopi Arabica 10g, Air Panas 20ml</p>
                </li>
                <li className="flex items-center space-x-2">
                  <p>Harga</p>
                  <p className="font-semibold">Rp.5.000</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image className="object-cover md:h-48 md:w-48 h-32 w-32 -mr-[6rem] z-10" src={require('@/image/IMG_05.jpg')} alt="image1" />
            <div className="md:pt-4 py-3 pl-[7rem] pr-3 md:space-y-4 bg-nero-10 w-full md:h-56 h-38 z-0">
              <h1 className="text-xl font-semibold text-cyn-20 tracking-widest">Expresso Coffee</h1>
              <ul className="opacity-50 tracking-wider">
                <li className="flex items-center space-x-2">
                  <p>Biji Kopi</p>
                  <p>Arabica</p>
                </li>
                <li className="md:flex md:items-center md:space-x-2">
                  <p>Komposisi</p>
                  <p>Kopi Arabica 10g, Air Panas 20ml</p>
                </li>
                <li className="flex items-center space-x-2">
                  <p>Harga</p>
                  <p className="font-semibold">Rp.5.000</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image className="object-cover md:h-48 md:w-48 h-32 w-32 -mr-[6rem] z-10" src={require('@/image/IMG_05.jpg')} alt="image1" />
            <div className="md:pt-4 py-3 pl-[7rem] pr-3 md:space-y-4 bg-nero-10 w-full md:h-56 h-38 z-0">
              <h1 className="text-xl font-semibold text-cyn-20 tracking-widest">Expresso Coffee</h1>
              <ul className="opacity-50 tracking-wider">
                <li className="flex items-center space-x-2">
                  <p>Biji Kopi</p>
                  <p>Arabica</p>
                </li>
                <li className="md:flex md:items-center md:space-x-2">
                  <p>Komposisi</p>
                  <p>Kopi Arabica 10g, Air Panas 20ml</p>
                </li>
                <li className="flex items-center space-x-2">
                  <p>Harga</p>
                  <p className="font-semibold">Rp.5.000</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4 px-2">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Ice Menu</h1>
            <hr className="w-20 border-cyn-20 border-2"/>
          </div>
          <div className="flex justify-center items-center">
            <Image className="object-cover md:h-48 md:w-48 h-32 w-32 -mr-[6rem] z-10" src={require('@/image/IMG_02.jpg')} alt="image1" />
            <div className="md:pt-4 py-3 pl-[7rem] pr-3 md:space-y-4 bg-nero-10 w-full md:h-56 h-38 z-0">
              <h1 className="text-xl font-semibold text-cyn-20 tracking-widest">Expresso Coffee</h1>
              <ul className="opacity-50 tracking-wider">
                <li className="flex items-center space-x-2">
                  <p>Biji Kopi</p>
                  <p>Arabica</p>
                </li>
                <li className="md:flex md:items-center md:space-x-2">
                  <p>Komposisi</p>
                  <p>Kopi Arabica 10g, Air Panas 20ml</p>
                </li>
                <li className="flex items-center space-x-2">
                  <p>Harga</p>
                  <p className="font-semibold">Rp.5.000</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image className="object-cover md:h-48 md:w-48 h-32 w-32 -mr-[6rem] z-10" src={require('@/image/IMG_02.jpg')} alt="image1" />
            <div className="md:pt-4 py-3 pl-[7rem] pr-3 md:space-y-4 bg-nero-10 w-full md:h-56 h-38 z-0">
              <h1 className="text-xl font-semibold text-cyn-20 tracking-widest">Expresso Coffee</h1>
              <ul className="opacity-50 tracking-wider">
                <li className="flex items-center space-x-2">
                  <p>Biji Kopi</p>
                  <p>Arabica</p>
                </li>
                <li className="md:flex md:items-center md:space-x-2">
                  <p>Komposisi</p>
                  <p>Kopi Arabica 10g, Air Panas 20ml</p>
                </li>
                <li className="flex items-center space-x-2">
                  <p>Harga</p>
                  <p className="font-semibold">Rp.5.000</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image className="object-cover md:h-48 md:w-48 h-32 w-32 -mr-[6rem] z-10" src={require('@/image/IMG_02.jpg')} alt="image1" />
            <div className="md:pt-4 py-3 pl-[7rem] pr-3 md:space-y-4 bg-nero-10 w-full md:h-56 h-38 z-0">
              <h1 className="text-xl font-semibold text-cyn-20 tracking-widest">Expresso Coffee</h1>
              <ul className="opacity-50 tracking-wider">
                <li className="flex items-center space-x-2">
                  <p>Biji Kopi</p>
                  <p>Arabica</p>
                </li>
                <li className="md:flex md:items-center md:space-x-2">
                  <p>Komposisi</p>
                  <p>Kopi Arabica 10g, Air Panas 20ml</p>
                </li>
                <li className="flex items-center space-x-2">
                  <p>Harga</p>
                  <p className="font-semibold">Rp.5.000</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image className="object-cover md:h-48 md:w-48 h-32 w-32 -mr-[6rem] z-10" src={require('@/image/IMG_02.jpg')} alt="image1" />
            <div className="md:pt-4 py-3 pl-[7rem] pr-3 md:space-y-4 bg-nero-10 w-full md:h-56 h-38 z-0">
              <h1 className="text-xl font-semibold text-cyn-20 tracking-widest">Expresso Coffee</h1>
              <ul className="opacity-50 tracking-wider">
                <li className="flex items-center space-x-2">
                  <p>Biji Kopi</p>
                  <p>Arabica</p>
                </li>
                <li className="md:flex md:items-center md:space-x-2">
                  <p>Komposisi</p>
                  <p>Kopi Arabica 10g, Air Panas 20ml</p>
                </li>
                <li className="flex items-center space-x-2">
                  <p>Harga</p>
                  <p className="font-semibold">Rp.5.000</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image className="object-cover md:h-48 md:w-48 h-32 w-32 -mr-[6rem] z-10" src={require('@/image/IMG_02.jpg')} alt="image1" />
            <div className="md:pt-4 py-3 pl-[7rem] pr-3 md:space-y-4 bg-nero-10 w-full md:h-56 h-38 z-0">
              <h1 className="text-xl font-semibold text-cyn-20 tracking-widest">Expresso Coffee</h1>
              <ul className="opacity-50 tracking-wider">
                <li className="flex items-center space-x-2">
                  <p>Biji Kopi</p>
                  <p>Arabica</p>
                </li>
                <li className="md:flex md:items-center md:space-x-2">
                  <p>Komposisi</p>
                  <p>Kopi Arabica 10g, Air Panas 20ml</p>
                </li>
                <li className="flex items-center space-x-2">
                  <p>Harga</p>
                  <p className="font-semibold">Rp.5.000</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
