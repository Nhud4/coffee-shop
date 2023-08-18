'use client';

import React, { useState } from 'react';
import { Table } from 'antd';
import dataTesting from '@/utils/data/dataTesting';

export default function TableVocher(){
  const [status, setStatus] = useState('Belum Digunakan');

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
      title: 'Kode Vocher',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Status Vocher',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Aksi',
      dataIndex: 'index',
      key: 'index',
      render: function Action(){
        return(
          <button
            className="bg-cyn-20 px-4 py-2 rounded-md text-white"
            onClick={() => setStatus('Digunakan')}
          >
            Claim
          </button>
        );
      }
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
          responsden: data.responsden,
          code: `KDV00R${i + 1}`,
          index: i + 1,
          status: status
        })
        )}
      />
    </div>
  );
}
