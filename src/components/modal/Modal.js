import React from 'react';
import { Modal } from 'antd';


export default function ModalToken({ isOpen, handleColse }){
  return(
    <Modal title="Promo" open={isOpen} footer={null} onCancel={handleColse}>
      <div className="text-center space-y-2 tracking-wide">
        <p className="text-base">Terimakasih talah mengisi ulasan </p>
        <hr />
        <p className="text-base">
            Anda mendapatkan penawaran spesial dasi hasil
            mengisi ulasan, anda bisa menunjukkan kode ini kekasir
            dan dapatkan promo sepesial dari kami
        </p>
        <h1 className="text-xl font-semibold">Code Anda</h1>
        <div className="flex justify-center">
          <p className="bg-cyn-20 px-4 py-2 rounded-md text-white text-x2l font-semibold">
            DEDECANTIK
          </p>
        </div>
        <p className="text-base">Atas Nama</p>
        <p className="text-xl font-semibold">Sefia</p>
      </div>
    </Modal>
  );
}
