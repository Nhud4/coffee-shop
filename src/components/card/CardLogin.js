'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Server from '@/utils/server/server';
import { saveToken } from '@/utils/server/localstorage';
import InputText from '../elements/input/InputText';
import InputPassword from '../elements/input/InputPassword';
import Button from '../elements/button/Button';

export default function CardLogin(){
  const server = new Server();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const disabled = Boolean(username && password);

  const handleSubmit = async() => {

    const result = await server.login(username, password);
    if(result.code === 201){
      saveToken(result.data.accessToken, result.data.expAccessToken);
      router.push('/dashboard');
    } else {
      alert('Username Atau Password Salah');
    }
  };

  return (
    <div className="mt-20 w-[25rem]">
      <div className="bg-white w-full rounded-md px-4 py-6 space-y-4 drop-shadow-xl">
        <div className="flex flex-col justify-center items-center space-y-4 mb-[2.5rem]">
          <div className="flex justify-center items-center  bg-nero-20 rounded-full w-32 h-32">
            <Image
              src="/icons/ic_user.svg"
              alt="user icon"
              width={80}
              height={80}
              priority
            />
          </div>
          <h1 className="md:text-[38px] text-xl font-semibold">Admin Login</h1>
        </div>

        <InputText
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputPassword
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          label="Masuk"
          disabled={!disabled}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
