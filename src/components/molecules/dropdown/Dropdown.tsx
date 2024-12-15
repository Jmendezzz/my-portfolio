import React, { useState, createContext, useContext, ReactNode, useRef } from 'react';
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

const Dropdown: DropdownComponent = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const ref = useRef(null);

    useClickOutside({
        ref,
        handler: () => setIsOpen(false),
    });


  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <div className="dropdown" ref={ref}>{children}</div>
    </DropdownContext.Provider>
  );
};

interface DropdownToggleProps {
  children: ReactNode;
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({ children }) => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('DropdownToggle must be used within a Dropdown');
  }

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
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('DropdownMenu must be used within a Dropdown');
  }

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
  return (
    <div className="dropdown__item" onClick={onClick}>
      {children}
    </div>
  );
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;