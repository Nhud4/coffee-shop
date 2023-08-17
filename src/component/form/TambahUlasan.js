'use client';

import React, { useState } from 'react';
import { Radio } from 'antd';
import InputText from '../elements/input/InputText';
import Button from '../elements/button/Button';
import ModalToken from '../modal/Modal';

export default function TambahUlasan(){
  const [nama, setNama] = useState('');
  const [produk, setProduk] = useState('');
  const [promosi, setPromosi] = useState('');
  const [tempat, setTempat] = useState('');
  const [harga, setHarga] = useState('');
  const [pelayanan, setPelayanan] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const dataProduk = [
    { label: 'Enak', value: 'enak' },
    { label: 'Kurang Enak', value: 'kurang_enak' }
  ];

  const dataPromosi = [
    { label: 'Menarik', value: 'menarik' },
    { label: 'Kurang Menarik', value: 'kurang_menarik' }
  ];

  const dataTempat = [
    { label: 'Nyaman', value: 'nyaman' },
    { label: 'Kurang Nyaman', value: 'kurang_nyaman' }
  ];

  const dataHarga = [
    { label: 'Murah', value: 'murah' },
    { label: 'Sedang', value: 'sedang' },
    { label: 'Mahal', value: 'mahal' }
  ];

  const dataPelayanan = [
    { label: 'Ramah', value: 'ramah' },
    { label: 'Kurang Ramah', value: 'kurang_ramah' }
  ];

  const handleColse = () => {
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const disabled = Boolean(nama && produk && harga && tempat && pelayanan && promosi);

  return (
    <div className="bg-white pt-6 pb-4 px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-nero-40" >
        Form Ulasan Pelanggan
        </h1>
        <hr className="w-20 border-cyn-20 border-2"/>

        <p className="text-lg mt-4 text-center text-nero-40">
            Isilah form ulasan ini sesuai dengan pengalaman anda
            ketika menjadi customer pada permakkopi
        </p>
      </div>
      <form className="flex justify-center items-center" onSubmit={handleSubmit}>
        <div className="w-full space-y-6 md:space-y-4 text-base bg-white shadow-lg border-2 border-nero-10 rounded-md p-4">
          <InputText
            className="flex items-center space-x-6"
            label="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />

          <div className="text-base font-medium text-black-500">
            <h2>1. Bagaimana pelayanan yang diberikan oleh Permakkopi?</h2>
            <Radio.Group onChange={(e) => setPelayanan(e.target.value)} value={pelayanan}>
              <div className="mt-2">
                {dataPelayanan.map(({ label, value }) => (
                  <Radio key={label} value={value}>
                    {label}
                  </Radio>
                ))}
              </div>
            </Radio.Group>
          </div>

          <div className="text-base font-medium text-black-500">
            <h2>2. Apa pendapat anda tentang produk yang disajikan oleh Permakkopi?</h2>
            <Radio.Group onChange={(e) => setProduk(e.target.value)} value={produk}>
              <div className="mt-2">
                {dataProduk.map(({ label, value }) => (
                  <Radio key={label} value={value}>
                    {label}
                  </Radio>
                ))}
              </div>
            </Radio.Group>
          </div>

          <div className="text-base font-medium text-black-500">
            <h2>3. Menurut anda apakah harga dari produk yang tertera termasuk dalam kategori murah, Sedang atau Mahal?</h2>
            <Radio.Group onChange={(e) => setHarga(e.target.value)} value={harga}>
              <div className="mt-2">
                {dataHarga.map(({ label, value }) => (
                  <Radio key={label} value={value}>
                    {label}
                  </Radio>
                ))}
              </div>
            </Radio.Group>
          </div>

          <div className="text-base font-medium text-black-500">
            <h2>4. Menurut anda apakah tempat Permakkopi termasuk nyaman atau kurang nyaman?</h2>
            <Radio.Group onChange={(e) => setTempat(e.target.value)} value={tempat}>
              <div className="mt-2">
                {dataTempat.map(({ label, value }) => (
                  <Radio key={label} value={value}>
                    {label}
                  </Radio>
                ))}
              </div>
            </Radio.Group>
          </div>

          <div className="text-base font-medium text-black-500">
            <h2>5. Apakah promosi yang diberikan menarik untuk anda?</h2>
            <Radio.Group onChange={(e) => setPromosi(e.target.value)} value={promosi}>
              <div className="mt-2">
                {dataPromosi.map(({ label, value }) => (
                  <Radio key={label} value={value}>
                    {label}
                  </Radio>
                ))}
              </div>
            </Radio.Group>
          </div>

          <Button
            label="Simpan"
            disabled={!disabled}
          />
        </div>
      </form>

      <ModalToken isOpen={openModal} handleColse={handleColse}/>
    </div>
  );
}
