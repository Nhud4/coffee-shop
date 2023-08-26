'use client';

import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import Server from '@/utils/server/server';

export default function TableVocher({ query }){
  const server = new Server();
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({});
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const { search } = query;

  const list = async(params) => {
    const result = await server.listData(params);
    if(result.code === 200){
      setData(result.data);
      setMeta(result.meta);
    }
  };

  useEffect(() => {
    list({
      page: page,
      size: size,
      search: search
    });
  },[load, search, page, size]);

  const handleUpdate = async(value) => {
    const result = await server.update(value);
    if(result.code === 201){
      alert('Berhasil Menggunakan Vocher');
      setLoad(!load);
    }else{
      alert('Terjadi Kesalahan');
    }
  };


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
            onClick={() => handleUpdate(value)}
          >
            Claim
          </button>
        );
      }
    },
  ];

  return(
    <div style={{ overflowX: 'auto' }}>
      <Table
        columns={columns}
        pagination={{
          total: meta?.totalData || 1,
          pageSize: size,
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '20', '30'],
          onChange: (page, pageSize) => {
            setPage(page);
            setSize(pageSize);
          },
        }}
        dataSource={data?.map((data, i) => ({
          ...data,
          index: i + 1 + (Number(page) - 1) * size,
        })
        )}
      />
    </div>
  );
}
