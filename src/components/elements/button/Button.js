import React from 'react';

export default function Button({ label, disabled, onClick }){
  const styles = {
    btnDisabled: 'bg-nero-30 px-4 py-2 rounded-md w-full cursor-not-allowed',
    btnActive: 'bg-primary-20 px-4 py-2 rounded-md w-full cursor-pointer '
  };

  return(
    <div className="text-base font-semibold text-white">
      <button
        className={disabled ? styles.btnDisabled : styles.btnActive}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
