import { ReactNode } from 'react';


interface IProps {
  children: ReactNode;
}
  
  export function FilterStatesContainer({children}: IProps) {
    return (
      <div className="flex items-center space-x-2 font-josefin">
        {children}
      </div>
    );
  }
  