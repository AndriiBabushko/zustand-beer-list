import React, { FC, ReactNode } from 'react';
import { AiFillWarning } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

interface CardProps {
  children: ReactNode | ReactNode[];
  navigationLink: string;
  imageSRC?: string;
  imageALT?: string;
  isActive?: boolean;
}

interface CatdTextContainerProps {
  children: ReactNode | ReactNode[];
  title?: boolean;
}

export const Card: FC<CardProps> = ({ children, imageSRC, imageALT, isActive, navigationLink = '' }) => {
  return (
    <>
      <NavLink
        to={navigationLink}
        className={`flex items-center ${
          isActive ? 'bg-slate-900 border-slate-800' : 'bg-slate-800 border-slate-900 hover:bg-slate-900'
        } border-2  rounded-lg transition-colors duration-200 ease-in-out py-2`}
      >
        {imageSRC ? (
          <img className="w-fit rounded-t-lg h-80 my-1 mx-2" src={imageSRC} alt={imageALT} />
        ) : (
          <div className={'m-2 flex flex-col items-center border-2 border-yellow-600 bg-yellow-500 rounded-lg '}>
            <AiFillWarning className="text-3xl mr-1" />
            <p className="">No Image</p>
          </div>
        )}

        <div className="w-full flex flex-col justify-between p-4">{children}</div>
      </NavLink>
    </>
  );
};

export const CardTextContainer: FC<CatdTextContainerProps> = ({ children, title = false }) => (
  <div className={`${title ? 'font-bold bg-slate-900' : 'bg-slate-800'} mb-2 border-2 border-slate-700 text-md text-center rounded-md py-2 px-4`}>
    {children}
  </div>
);
