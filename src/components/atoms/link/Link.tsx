import './link.scss';
interface LinkProps {
    readonly to?: string;
    readonly children?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
}
function Link({ to, children, size='medium'}: LinkProps) {
  return (
    <a href={to} className={`link link--${size}`}>
        {children}
    </a>
  )
}

export default Link