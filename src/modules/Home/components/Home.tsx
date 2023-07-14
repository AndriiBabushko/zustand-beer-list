import React from 'react';

export const Home = () => {
  return (
    <>
      <div className={'mt-2 flex justify-center items-center w-full'}>
        <div className={'border-2 border-slate-800 bg-slate-900 rounded-lg'}>
          <h1 className={'text-white text-center text-2xl mx-8 my-2 pb-2 border-b-2 '}>Beer is healthy drink!</h1>
          <img src="/assets/zustand-logo.png" alt="Zustand Logo" />
        </div>
      </div>
    </>
  );
};
