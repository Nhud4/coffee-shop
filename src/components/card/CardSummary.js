import React from 'react';

export default function CardSummary({ title, label, totalData }){
  return(
    <div className="bg-white px-4 py-6 rounded-lg shadow-1">
      <h1>{title}</h1>
      {totalData ? (
        <p>{label} / {totalData}</p>
      ):(
        <p>{label}</p>
      )}
    </div>
  );
}
