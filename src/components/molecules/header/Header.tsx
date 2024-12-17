import './header.scss';

interface HeaderProps {
    readonly children: React.ReactNode | React.ReactNode[];
    readonly className?: string;
}

function Header({ children, className}: HeaderProps) {
  return (
    <header className={`header ${className ?? ''}`}>
        {children}
    </header>
  )
}

export default Header