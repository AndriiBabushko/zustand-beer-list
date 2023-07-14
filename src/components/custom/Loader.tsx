import React, { FC } from 'react';
import { Rings } from 'react-loader-spinner';

interface LoaderProps {
  loaderText?: string;
  loaderColor?: string;
}

export const Loader: FC<LoaderProps> = ({ loaderText, loaderColor = 'rgb(25 25 25)' }) => {
  return (
    <div className={`flex flex-col justify-center items-center h-screen`}>
      {loaderText ? <p className={`text-3xl`}>{loaderText}</p> : ''}
      <Rings width={'100'} height={'100'} radius={5} color={loaderColor} ariaLabel={`Loading...`} />
    </div>
  );
};
