"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "../MobileMenu/MobileMenu";
import Image from "next/image";
import css from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu if innerWidth >= 767
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMenuOpen]);

  return (
    <header className={css.header}>
      <div className={`${css.headerContainer} container`}>
        <Link href="/">
          <Image
            className={css.logoImage}
            src="/logo-rivne.png"
            alt="Logo Rivne"
            width={90}
            height={80}
            priority
          />
        </Link>
        <nav className={css.desktopNav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link
                className={`${css.navLink} ${pathname === "/about" ? css.active : ""}`}
                href="/about"
              >
                Про Департамент
              </Link>
            </li>
            <li className={css.navItem}>
              <Link
                className={`${css.navLink} ${pathname === "/structure" ? css.active : ""}`}
                href="/structure"
              >
                Структура
              </Link>
            </li>
            <li className={css.navItem}>
              <Link
                className={`${css.navLink} ${pathname === "/programs" ? css.active : ""}`}
                href="/programs"
              >
                Програми
              </Link>
            </li>
            <li className={css.navItem}>
              <Link
                className={`${css.navLink} ${pathname === "/programPassports" ? css.active : ""}`}
                href="/programPassports"
              >
                Паспорти програм
              </Link>
            </li>
          </ul>
        </nav>
        <div className={css.socialBar}>
          <div className={css.socialWrapper}></div>

          <button className={css.burgerBtn} onClick={() => setIsMenuOpen(true)}>
            <svg width="28" height="28" className={css.burgerIcon}>
              <use href="/sprite.svg#icon-menu-04" />
            </svg>
          </button>
        </div>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
}
