'use client';

import React from 'react';
import { Table } from 'antd';
import dataTesting from '@/utils/data/dataTesting';

export default function TableCustomer(){
  const columns = [
    {
      title: 'No',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'Nama',
      dataIndex: 'responsden',
      key: 'responsden',
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
    pageSize: 10,
  };

  return(
    <div>
      <Table
        columns={columns}
        pagination={pagination}
        dataSource={dataTesting?.map((data, i) => ({
          ...data,
          index: i + 1
        })
        )}
      />
    </div>
  );
}
