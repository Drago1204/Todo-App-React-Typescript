import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  theme: string
}
export function TodoFilters({ children, theme }: IProps) {
  return (
    <div className={`flex items-center justify-between p-4 ${theme === 'light' ? 'bg-light-element' : 'bg-dark-element'} border-b border-solid border-gray-600`}>
      {children}
    </div>
  );
}
