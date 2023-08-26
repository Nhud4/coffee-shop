import React from 'react';

export default function InputText({ label, onChange, value, className, placeholder }){
  const styles = {
    activeBox: 'flex items-center p-2 rounded border-2 border-cyn-20 bg-cyn-20 h-[2.5rem]',
    inactiveBox: 'flex items-center p-2 rounded border-2 border-cyn-20 h-[2.5rem]',
    label: 'text-base font-medium text-black-500 pb-2',
    inputBox: 'w-full text-base text-black-500 bg-transparent outline-none border-none',
    inputActive: 'w-full text-base text-white bg-cyn-20  outline-none border-none'
  };

  return (
    <div className={className}>
      <h1 className={styles.label}>{label}</h1>
      <div className={value ? styles.activeBox : styles.inactiveBox}>
        <input
          type="text"
          className={value ? styles.inputActive : styles.inputBox}
          value={value}
          onChange={onChange}
          autoComplete="off"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
