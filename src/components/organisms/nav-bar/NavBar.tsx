import { Logo, Link } from '@components/atoms';
import { LanguageSwitcher } from '@components/molecules';
import { useTranslation } from 'react-i18next';
import './nav-bar.scss';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const SCROLL_THRESHOLD = 50;

function NavBar() {
  const { t } = useTranslation();
  const isScrolled = useScrollPosition(SCROLL_THRESHOLD);

  return (
    <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
      <div className='nav__content'>
        <Logo size={`${isScrolled ? 'small' : 'medium'}`}/>
        <div className='nav__right'>
          <ul className="nav__list">
            <Link size={`${isScrolled ? 'small' : 'medium'}`} to="#projects">{t('nav.projects')}</Link>
            <Link size={`${isScrolled ? 'small' : 'medium'}`}  to="mailto:juange.mendez.lopez@gmail.com">{t('nav.contact')}</Link>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>

    </nav>
  );
}

export default NavBar;
