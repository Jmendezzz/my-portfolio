import { Logo, Link } from '@components/atoms';
import { LanguageSwitcher } from '@components/molecules';
import { useTranslation } from 'react-i18next';
import './nav-bar.scss';

function NavBar() {
  const { t } = useTranslation();
  return (
    <nav className="nav">
      <Logo />
      <ul className="nav__list">
        <Link to="#">{t('nav.contact')}</Link>
        <Link to="#">{t('nav.projects')}</Link>
        <LanguageSwitcher />
      </ul>
    </nav>
  );
}

export default NavBar;
