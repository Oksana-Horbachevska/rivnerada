import Link from "next/link";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={`${css.footerContainer} container`}>
        <div className={css.footer_main}>
          <div className={css.footer__nav}>
            <ul>
              <li className={css.navItem}>
                <Link className={css.navLink} href="/about">
                  Про Департамент
                </Link>
              </li>
              <li className={css.navItem}>
                <Link className={css.navLink} href="/structure">
                  Структура
                </Link>
              </li>
            </ul>
            <ul>
              <li className={css.navItem}>
                <Link className={css.navLink} href="/programs">
                  Програми
                </Link>
              </li>
              <li className={css.navItem}>
                <Link className={css.navLink} href="/programPassports">
                  Паспорти програм
                </Link>
              </li>
            </ul>
          </div>
          <div className={css.footer__social}>
            <ul>
              <li className={css.social_link}>
                <a href="#" className={css.social_link}>
                  <svg width="20" height="20" className={css.icon}>
                    <use href="/sprite.svg#icon-map-pin" />
                  </svg>
                  <span>33028, м.Рівне, вул.Поштова,2</span>
                </a>
              </li>
              <li className={css.social_link}>
                <a
                  href="mailto: der@rivnerada.gov.ua"
                  className={css.social_link}
                >
                  <svg width="20" height="20" className={css.icon}>
                    <use href="/sprite.svg#icon-envelope" />
                  </svg>
                  <span> der@rivnerada.gov.ua</span>
                </a>
              </li>
              <li className={css.social_link}>
                <a href="tel: 0362635848" className={css.social_link}>
                  <svg width="20" height="20" className={css.icon}>
                    <use href="/sprite.svg#icon-phone" />
                  </svg>
                  <span> (0362)63-58-48, факс 26-66-25</span>
                </a>
              </li>
              <li className={css.social_link}>
                <a
                  href="https://www.facebook.com/economy.rv.ua/"
                  className={css.social_link}
                >
                  <svg width="20" height="20" className={css.icon}>
                    <use href="/sprite.svg#icon-facebook" />
                  </svg>
                  <span>facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
