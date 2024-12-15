import { useTranslation } from 'react-i18next';
import { Dropdown } from '@components/molecules';

import esImage from '@/assets/images/spain.svg';
import enImage from '@/assets/images/usa.svg';
import './language-switcher.scss';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <div className="language-switcher">
          {i18n.language === 'es' ? (
            <div className='language-switcher__content'>
              <span>ES</span>
              <img src={esImage} alt="Spanish flag" width={20} height={20} />
            </div>
          ) : (
            <div className='language-switcher__content'>
              <span>EN</span>
              <img src={enImage} alt="English flag"  width={20} height={20}  />
            </div>
          )}
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeLanguage('en')}>
          English
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('es')}>
          Español
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSwitcher;
