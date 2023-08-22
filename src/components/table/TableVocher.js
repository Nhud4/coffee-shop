'use client';

import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import Server from '@/utils/server/server';

export default function TableVocher(){
  const server = new Server();
  const [data, setData] = useState([]);

  const list = async(params) => {
    const result = await server.listData(params);
    if(result.code === 200){
      setData(result.data);
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
      title: 'Kode Vocher',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: 'Status Vocher',
      dataIndex: 'tokenUse',
      key: 'tokenUse',
    },
    {
      title: 'Aksi',
      dataIndex: 'id',
      key: 'id',
      render: function Action(value){
        const filter = data?.filter(({ id }) => value === id);
        const used = filter[0].tokenUse === 'Digunakan' ? true : false;
        return (
          <button
            className={used? 'bg-nero-20 px-4 py-2 rounded-md text-white':'bg-cyn-20 px-4 py-2 rounded-md text-white'}
            disabled={used}
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
    <div style={{ overflowX: 'auto' }}>
      <Table
        columns={columns}
        pagination={pagination}
        dataSource={data?.map((data, i) => ({
          ...data,
          index: i + 1,
        })
        )}
      />
    </div>
  );
}
