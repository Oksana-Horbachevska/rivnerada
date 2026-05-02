import Link from "next/link";
import css from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`${css.backdrop} ${isOpen ? css.isOpen : ""}`}
      onClick={onClose}
    >
      <div className={css.menuContent} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
          <svg width="28" height="28" className={css.closeIcon}>
            <use href="/sprite.svg#icon-close" />
          </svg>
        </button>

        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link href="/about" className={css.navLink} onClick={onClose}>
                Про Департамент
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/structure" className={css.navLink} onClick={onClose}>
                Структура
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/programs" className={css.navLink} onClick={onClose}>
                Програми
              </Link>
            </li>
            <li className={css.navItem}>
              <Link
                href="/programPassports"
                className={css.navLink}
                onClick={onClose}
              >
                Паспорти програм
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
