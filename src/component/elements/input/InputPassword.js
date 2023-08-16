'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function InputPassword({ label, onChange, value }){
  const [type, setType] = useState(true);

  const styles = {
    activeBox: 'flex items-center p-2 rounded border-2 border-nero-30 bg-nero-10 h-[2.5rem]',
    inactiveBox: 'flex items-center p-2 rounded border-2 border-black-300 h-[2.5rem]',
    label: 'text-base font-medium text-black-500 pb-2',
    inputBox: 'w-full text-sm text-black-500 bg-transparent outline-none border-none',
    inputActive: 'w-full text-sm text-black-500 bg-nero-10 outline-none border-none'
  };

  return (
    <div>
      <h1 className={styles.label}>{label}</h1>
      <div className={value ? styles.activeBox : styles.inactiveBox}>
        <input
          type={type ? 'password':'text'}
          className={value ? styles.inputActive : styles.inputBox}
          onChange={onChange}
          value={value}
          autoComplete="off"
        />

        <Image
          src="/assets/icons/eye-off.svg"
          className="cursor-pointer"
          alt="icon"
          width={25}
          height={25}
          priority
          onClick={() => setType(!type)}
        />
      </div>
    </div>
  );
}
