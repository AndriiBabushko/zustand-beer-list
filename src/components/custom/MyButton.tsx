import React, { FC, MouseEventHandler, FormEventHandler, ReactNode } from 'react';

interface MyButtonProps {
  children: ReactNode | ReactNode[];
  buttonType?: 'button' | 'reset' | 'submit';
  className?: string;
  onClickEvent?: MouseEventHandler<HTMLButtonElement>;
  onSubmitEvent?: FormEventHandler<HTMLButtonElement>;
  buttonId?: string;
  buttonName?: string;
  disabled?: boolean;
}

export const MyButton: FC<MyButtonProps> = ({
  children,
  buttonId,
  buttonName,
  className,
  onClickEvent,
  onSubmitEvent,
  buttonType = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={buttonType}
      id={buttonId}
      name={buttonName}
      onClick={onClickEvent}
      onSubmit={onSubmitEvent}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
