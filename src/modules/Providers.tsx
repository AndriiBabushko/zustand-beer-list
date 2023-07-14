import React, { FC, ReactNode, StrictMode } from 'react';

type ProvidersProps = {
  children: ReactNode | ReactNode[];
};

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <StrictMode>{children}</StrictMode>;
};
