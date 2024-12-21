import { Logo, Link } from '@components/atoms';
import { LanguageSwitcher } from '@components/molecules';
import { useTranslation } from 'react-i18next';
import './nav-bar.scss';

function NavBar() {
  const { t } = useTranslation();
  return (
    <nav className="nav">
      <Logo />
      <div className='nav__right'>
        <ul className="nav__list">
          <Link to="#projects">{t('nav.projects')}</Link>
          <Link to="#">{t('nav.contact')}</Link>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default NavBar;
