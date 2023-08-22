'use client';

import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import Server from '@/utils/server/server';

export default function TableCustomer(){
  const server = new Server();
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});

  const list = async(params) => {
    const result = await server.listData(params);
    if(result.code === 200){
      setData(result.data);
      setMeta(result.meta);
    }
  };

  useEffect(() => {
    list({
      page: 1,
      size: 10,
    });
  },[]);

  const columns = [
    {
      title: 'No',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Pelayanan',
      dataIndex: 'pelayanan',
      key: 'pelayanan',
    },
    {
      title: 'Produk',
      dataIndex: 'produk',
      key: 'produk',
    },
    {
      title: 'Harga',
      dataIndex: 'harga',
      key: 'harga',
    },
    {
      title: 'Tampat',
      dataIndex: 'tempat',
      key: 'tempat',
    },
    {
      title: 'Promosi',
      dataIndex: 'promosi',
      key: 'promosi',
    },
    {
      title: 'Kepuasan',
      dataIndex: 'kepuasan',
      key: 'kepuasan',
    },
  ];

  const pagination = {
    current: 1,
    pageSize: 10
  };

  return(
    <div style={{ overflowX: 'auto' }}>
      <Table
        columns={columns}
        pagination={pagination}
        dataSource={data?.map((data, i) => ({
          ...data,
          index: i + 1
        })
        )}
      />
    </div>
  );
}
