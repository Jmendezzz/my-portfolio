import { Logo } from '@components/atoms';
import { useTranslation } from 'react-i18next';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {
  PiBagSimpleFill,
  PiMailboxFill,
  PiUserFill,
} from 'react-icons/pi';
import './footer.scss';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <Logo size='medium' />
          <p className="footer__text  footer__text-icon">
            <PiUserFill />
            {t('footer.name')}
          </p>
          <p className="footer__text  footer__text-icon">
            <PiBagSimpleFill />

            {t('footer.position')}
          </p>
          <a
            href="mailto:juange.mendez.lopez@gmail.com"
            className="footer__link footer__text-icon"
          >
            <PiMailboxFill className="footer__icon" />
            juange.mendez.lopez@gmail.com
          </a>
        </div>
        <div className="footer__social">
          <a
            href="https://github.com/JMendezzz"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="footer__social-icon" />
          </a>
          <a
            href="https://linkedin.com/in/juan-gerardo-m-l"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="footer__social-icon" />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
