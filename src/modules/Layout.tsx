import React, { FC, ReactNode } from 'react';
import { UserNavbar } from '../components/navigation/UserNavbar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <UserNavbar />
      <div className={'container mx-auto'}>{children}</div>
    </>
  );
};
