import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BarChartHome } from '@/components/chart/BarChart';
import NavigationDashboard from '@/components/navigasi/NavigasiDashboard';
import CardSummary from '@/components/card/CardSummary';
import { PieChartHome } from '@/components/chart/PieChart';
import TableCustomer from '@/components/table/TablePelanggan';
import { getToken } from '@/utils/server/localstorage';
import Server from '@/utils/server/server';

export default function Dashboard(){
  const router = useRouter();
  const userToken = getToken();
  const server = new Server();
  const [dataSummary, setDataSummary] = useState({});

  useEffect(() => {
    if(!userToken){
      router.push('/login');
    }
  }, []);

  const result = async() => {
    const getData = await server.summary();
    if(getData.code === 200){
      setDataSummary(getData.data);
    }

  };
  useEffect(() => {
    result();
  }, []);

  return (
    <div>
      <NavigationDashboard page={'dashboard'}/>
      <div className="w-full p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <CardSummary
            title="Jumlah Ulasan"
            label={`${dataSummary?.totalData} Ulasan` || '0 Ulasan'}
          />
          <CardSummary
            title="Julmah Ulasan Puas"
            label={`${dataSummary?.puas} Ulasan` || '0 Ulasan'}
          />
          <CardSummary
            title="Jumlah Ulasan Tidak Puas"
            label={`${dataSummary?.tidakPuas} Ulasan` || '0 Ulasan'}
          />
          <CardSummary
            title="Vocher Digunakan"
            label={dataSummary?.usedToken}
            totalData={dataSummary?.totalToken}
          />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-3">
            <BarChartHome value={dataSummary}/>
          </div>

          <PieChartHome value={dataSummary}/>
        </div>

        <div className="mt-6 bg-white p-4 rounded-lg shadow-1">
          <h1 className="text-3xl font-bold text-cyn-20 mb-4">Detail Kepuasan Pelanggan</h1>

          <TableCustomer />
        </div>
      </div>
    </div>
  );
}
