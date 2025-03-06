import './logo.scss';

interface LogoProps {
  size: 'small' | 'medium' | 'large';
}

function Logo({ size = 'medium' }: LogoProps) {
  return (
    <div className={`logo logo--${size}`}>
      <h2 className={`logo__name logo__name--${size}`}>Gerard</h2>
      <h2 className={`logo__subtittle logo__subtittle--${size}`}>&lt;Dev/&gt;</h2>
      </div>
  );
}

export default Logo;
