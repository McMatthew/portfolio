import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import cvPdf from '../../assets/matteo_bianchi_cv.pdf';

const NAV_LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/skills', label: 'SKILLS' },
  { to: '/contact', label: 'CONTACT' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Matteo Bianchi</div>

        <nav className={styles.nav}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`${styles.navLink} ${pathname === to ? styles.navLinkActive : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <a href={cvPdf} download="matteo_bianchi_cv.pdf" className={styles.btnDownload}>
            DOWNLOAD_CV
          </a>
          <button
            className={styles.terminalBtn}
            onClick={() => setOpen(true)}
            aria-label="Apri menu di navigazione"
          >
            <span className={styles.icon}>terminal</span>
          </button>
        </div>
      </header>

      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <aside className={styles.drawer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.drawerTop}>
              <span className={styles.drawerTitle}>// NAVIGATION_MENU</span>
              <button className={styles.drawerClose} onClick={() => setOpen(false)}>✕</button>
            </div>
            <nav className={styles.drawerNav}>
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`${styles.drawerLink} ${pathname === to ? styles.drawerLinkActive : ''}`}
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.prompt}>&gt;</span>
                  {label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
