import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavigationDashboard from '@/components/navigasi/NavigasiDashboard';
import TableVocher from '@/components/table/TableVocher';
import { getToken } from '@/utils/server/localstorage';
import Server from '@/utils/server/server';

export default function AdminUlasan(){
  const router = useRouter();
  const userToken = getToken();
  const server = new Server();
  const [reloaded, setReloaded] = useState(false);

  // const handleUpdate = async(value) => {
  //   const result = await server.update(value);
  //   if(result.code === 201){
  //     alert('Berhasil Menggunakan Vocher');
  //     setReloaded(!reloaded);
  //   }else{
  //     alert('Terjadi Kesalahan');
  //   }
  // };

  useEffect(() => {
    if(!userToken){
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <NavigationDashboard page={'dataUlasan'}/>
      <div className="my-6 mx-4 bg-white rounded-lg shadow-1 p-4">
        <h1 className="text-3xl font-bold text-cyn-20 mb-4">Data Vocher Pelanggan</h1>

        <TableVocher />
      </div>
    </div>
  );
}
