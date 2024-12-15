import './link.scss';
interface LinkProps {
    readonly to?: string;
    readonly children?: React.ReactNode;
}
function Link({ to, children}: LinkProps) {
  return (
    <a href={to} className="link">
        {children}
    </a>
  )
}

export default Link