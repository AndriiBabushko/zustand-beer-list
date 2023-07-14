import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBeer } from 'react-icons/bi';

import { paths } from '../../const/paths';
import { MyButton } from '../custom/MyButton';

const pages = [
  {
    name: 'Home',
    to: paths.home,
    icon: <AiOutlineHome />,
  },
  {
    name: 'Beers',
    to: paths.recipes,
    icon: <BiBeer />,
  },
];

export const UserNavbar = () => {
  const buttonClasses = `bg-blue-700 bg-opacity-20 my-2 rounded-lg hover:bg-opacity-50 focus:outline-none 
  focus-visible:ring-2 transition-colors duration-300 ease-in-out focus-visible:ring-white 
  focus-visible:ring-opacity-75 active:bg-opacity-50`;

  return (
    <>
      <nav className="w-full bg-slate-900 border-b-2 border-slate-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to={paths.home} className="flex items-center">
            <img alt="Zustand Beer App" className="mr-3 h-6 sm:h-9" src="/assets/zustand-logo.png" />
            <span className="self-center whitespace-nowrap text-xl font-semibold">Zustand Beer App</span>
          </NavLink>

          <div className="flex md:order-2">
            <NavLink to={'https://github.com/AndriiBabushko/zustand-beer-list'} className={`${buttonClasses} py-2 px-4 font-bold`} target={'_blank'}>
              Repo
            </NavLink>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0">
              {pages.map((page) => {
                return (
                  <li key={page.name}>
                    <NavLink to={page.to}>
                      {({ isActive }) => {
                        return (
                          <MyButton className={`${buttonClasses} ${isActive ? `bg-opacity-50` : 'bg-opacity-20 '}`}>
                            <div className={`flex items-center p-2`}>
                              <span>{page.icon}</span>
                              <span className="ml-3">{page.name}</span>
                            </div>
                          </MyButton>
                        );
                      }}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
