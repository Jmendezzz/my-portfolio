import React, { useState, createContext, useContext, ReactNode, useRef, useMemo } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import './dropdown.scss';

interface DropdownProps {
  children: ReactNode;
}

interface DropdownContextProps {
  isOpen: boolean;
  toggle: () => void;
}

const DropdownContext = createContext<DropdownContextProps | undefined>(undefined);

interface DropdownComponent extends React.FC<DropdownProps> {
  Toggle: React.FC<DropdownToggleProps>;
  Menu: React.FC<DropdownMenuProps>;
  Item: React.FC<DropdownItemProps>;
}

function useDropdownContext(){
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('DropdownItem must be used within a Dropdown');
  }
  return context;
}
const Dropdown: DropdownComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const ref = useRef<HTMLDivElement>(null!);

  useClickOutside({
    ref,
    handler: () => setIsOpen(false),
  });

  const contextValue = useMemo(() => ({ isOpen, toggle }), [isOpen, toggle]);

  return (
    <DropdownContext.Provider value={contextValue}>
      <div className="dropdown" ref={ref}>{children}</div>
    </DropdownContext.Provider>
  );
};

interface DropdownToggleProps {
  children: ReactNode;
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({ children }) => {
  const context = useDropdownContext();

  return (
    <button className="dropdown__toggle" onClick={context.toggle}>
      {children}
    </button>
  );
};

interface DropdownMenuProps {
  children: ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const context = useDropdownContext();

  return (
    <div
      className={`dropdown__menu ${context.isOpen ? 'dropdown__menu--open' : ''}`}
    >
      {children}
    </div>
  );
};

interface DropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick }) => {
  const context = useDropdownContext();

  const handleClick = () => {
    context.toggle();
    if(onClick) {
      onClick();
    }
  };

  return (
    <button className="dropdown__item" onClick={handleClick} role="menuitem" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}>
      {children}
    </button>
  );
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;