import './button.scss';

interface ButtonProps {
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly size?: 'sm' | 'md' | 'lg';
  readonly variant?: 'primary' | 'secondary';
  readonly icon?: React.ReactNode; 
}

function Button({ children, onClick, size = 'md', variant = 'primary', icon }: ButtonProps) {
  return (
    <button className={`button button--${size} button--${variant}`} onClick={onClick}>
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__text">{children}</span>
    </button>
  );
}

export default Button;