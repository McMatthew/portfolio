import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import me from '../assets/me.png';
import cvPdf from '../assets/matteo_bianchi_cv.pdf';
import letteraPdf from '../assets/matteo_bianchi_lettera.pdf';

function Icon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <span className={styles.icon} style={{ fontSize: size }}>
      {name}
    </span>
  );
}

function SteppedBar({ pct }: { pct: number }) {
  const total = 10;
  const active = Math.round((pct / 100) * total);
  return (
    <div className={styles.steppedBar}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={i < active ? styles.steppedBarCellActive : styles.steppedBarCell} />
      ))}
    </div>
  );
}

const ROADMAP = [
  {
    date: '1/6/2021',
    title: 'Tirocinio - Hardware Upgrade',
    desc: 'Primo contatto con sistemi hardware complessi e interfacce tecniche.',
    active: true,
  },
  {
    date: '15/7/2022',
    title: 'Diploma di maturità',
    desc: 'Conclusione del percorso scolastico tecnico con focus su sistemi informativi e sviluppo software.',
    active: false,
  },
  {
    date: 'PRESENTE',
    title: 'Front-end dev SIDA Autosoft',
    desc: 'Sviluppo di piattaforme cloud basate su React e architetture Kubernetes.',
    active: true,
  },
];

const PROJECTS = [
  {
    id: 'BUILD_01',
    icon: 'terminal',
    title: ':DASF, Datagram specifications',
    desc: 'Creazione di specifiche JSON per documentare richieste UDP tramite un linguaggio custom.',
    tags: ['React', 'Vite', 'UDP_DOCS'],
    linkText: 'VIEW_SPEC',
    linkIcon: 'open_in_new',
    href: 'https://mcmatthew.github.io/dasf/',
  },
  {
    id: 'BUILD_02',
    icon: 'cloud',
    title: 'Cloud Web App - SIDA',
    desc: 'Potente app cloud per la gestione autoscuola. Kubernetes, React, Kotlin.',
    tags: ['Kubernetes', 'Kotlin', 'React'],
    linkText: 'ACCESS_APP',
    linkIcon: 'lock_open',
    href: '/projects',
  },
  {
    id: 'BUILD_03',
    icon: 'precision_manufacturing',
    title: 'Controllo simulatore',
    desc: 'Interfaccia Electron per report medici su simulatori di guida per disabilità.',
    tags: ['Electron', 'Redux', 'NextJS'],
    linkText: 'SIM_LOGS',
    linkIcon: 'query_stats',
    href: '/projects',
  },
];

const HARD_SKILLS = [
  { name: 'Testing', pct: 70 },
  { name: 'Clean Code', pct: 80 },
  { name: 'Responsive Design', pct: 75 },
  { name: 'Best Practice', pct: 100 },
];

const SOFT_SKILLS = [
  { name: 'Agile', pct: 90 },
  { name: 'Team Work', pct: 100 },
  { name: 'Pensiero Critico', pct: 90 },
  { name: 'Problem Solving', pct: 100 },
];

export function HomePage() {
  const handleSmoothScroll = (e: { preventDefault: () => void }, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.root}>
      {/* ── Header ── */}
      <header className={styles.header}>
        <div className={styles.logo}>Matteo Bianchi</div>
        <nav className={styles.nav}>
          <a href="#home" className={`${styles.navLink} ${styles.navLinkActive}`} onClick={(e) => handleSmoothScroll(e, '#home')}>HOME</a>
          <Link to="/projects" className={styles.navLink}>PROJECTS</Link>
          <Link to="/skills" className={styles.navLink}>SKILLS</Link>
          <Link to="/contact" className={styles.navLink}>CONTACT</Link>
        </nav>
        <div className={styles.headerActions}>
          <a href={cvPdf} download="matteo_bianchi_cv.pdf" className={styles.btnDownload}>DOWNLOAD_CV</a>
          <span className={`${styles.icon} ${styles.terminalIcon}`} style={{ fontSize: 24 }}>
            terminal
          </span>
        </div>
      </header>

      {/* ── Main ── */}
      <main className={`${styles.main} ${styles.gridBg}`}>
        {/* Hero */}
        <section id="home" className={styles.heroSection}>
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              FRONT-END_ENGINEER_V2.0
            </div>
            <h1 className={styles.heroH1}>
              ENGINEERING <br />
              <span className={styles.heroH1Blue}>FLAWLESS</span> INTERFACES.
            </h1>
            <p className={styles.heroDesc}>
              Beh se non si fosse ancora capito, io sono Matteo... Bianchi Matteo per la precisione.
              Il mio obiettivo è farmi riconoscere dalla qualità del mio lavoro e dalla precisione
              tecnica dei miei sistemi.
            </p>
            <div className={styles.heroButtons}>
              <button
                className={styles.btnPrimary}
                onClick={() =>
                  document.querySelector('#progetti')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                START_EXPLORATION
              </button>
              <a
                href="https://github.com/McMatthew"
                target="_blank"
                rel="noreferrer"
                className={styles.btnSecondary}
                style={{ display: 'inline-block', textDecoration: 'none' }}
              >
                VIEW_SOURCE
              </a>
            </div>
          </div>

          <div className={styles.heroPortraitWrapper}>
            <div className={styles.heroPortraitContainer}>
              <div className={styles.heroPortraitBg} />
              <div className={styles.heroPortraitPanel}>
                <img alt={'io'} height={'100%'} src={me} />
              </div>
              <div className={styles.heroRefId}>REF_ID: BIANCHI_01</div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className={styles.roadmapSection}>
          <div className={styles.roadmapInner}>
            <div className={styles.roadmapHeader}>
              <div>
                <h2 className={styles.roadmapTitle}>La mia roadmap</h2>
                <p className={styles.roadmapSubtitle}>CAREER_LOGS_TIMESTAMPED</p>
              </div>
              <div className={styles.roadmapNav}>
                <button className={styles.roadmapNavBtn}>
                  <Icon name="chevron_left" />
                </button>
                <button className={styles.roadmapNavBtn}>
                  <Icon name="chevron_right" />
                </button>
              </div>
            </div>
            <div className={styles.roadmapTimeline}>
              <div className={styles.roadmapLine} />
              <div className={styles.roadmapGrid}>
                {ROADMAP.map((item) => (
                  <div key={item.date} className={styles.roadmapItem}>
                    <div
                      className={`${styles.roadmapDot} ${item.active ? styles.roadmapDotBlue : styles.roadmapDotGray}`}
                    />
                    <span
                      className={`${styles.roadmapDate} ${item.active ? styles.roadmapDateBlue : styles.roadmapDateGray}`}
                    >
                      {item.date}
                    </span>
                    <h3 className={styles.roadmapItemTitle}>{item.title}</h3>
                    <p className={styles.roadmapItemDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="progetti" className={styles.projectsSection}>
          <h2 className={styles.sectionTitle}>Progetti: System_Builds</h2>
          <div className={styles.projectsGrid}>
            {PROJECTS.map((p) => (
              <div key={p.id} className={styles.hardwarePanel}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectIconBox}>
                    <Icon name={p.icon} />
                  </div>
                  <div className={styles.projectBuildId}>{p.id}</div>
                </div>
                <div>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <p className={styles.projectDesc}>{p.desc}</p>
                  <div className={styles.projectTags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.projectTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={p.href} className={styles.projectLink} target="_blank" rel="noreferrer">
                  {p.linkText} <Icon name={p.linkIcon} size={18} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={styles.skillsSection}>
          <div className={styles.skillsInner}>
            <div className={styles.skillsGrid}>
              <div>
                <h2 className={styles.skillsSectionTitle}>Hard skills: Core_Engine</h2>
                <div className={styles.hardSkillsList}>
                  {HARD_SKILLS.map((s) => (
                    <div key={s.name} className={styles.skillItem}>
                      <div className={styles.skillLabelRow}>
                        <span className={styles.skillName}>{s.name}</span>
                        <span className={styles.skillPct}>{s.pct}%</span>
                      </div>
                      <SteppedBar pct={s.pct} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className={styles.skillsSectionTitle}>Soft skills: Inter_Ops</h2>
                <div className={styles.softSkillsGrid}>
                  {SOFT_SKILLS.map((s) => (
                    <div key={s.name} className={styles.softSkillCard}>
                      <span className={styles.softSkillName}>{s.name}</span>
                      <span className={styles.softSkillPct}>{s.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contatti" className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div>
              <h2 className={styles.contactSectionTitle}>Get in Touch</h2>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <div className={styles.contactIconBox}>
                    <Icon name="call" />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Phone_Comms</span>
                    <p className={styles.contactValue}>+39 392 275 8741</p>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <div className={styles.contactIconBox}>
                    <Icon name="alternate_email" />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Gmail_Channel</span>
                    <p className={styles.contactValue}>matteo.bianchi@gmail.com</p>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <div className={styles.contactIconBox}>
                    <Icon name="share" />
                  </div>
                  <div>
                    <span className={styles.contactLabel}>Social_Nodes</span>
                    <div className={styles.contactSocialLinks}>
                      <a
                        href="https://www.linkedin.com/in/matteo-bianchi-701b76263/"
                        className={styles.contactSocialLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Linkedin
                      </a>
                      <a
                        href="https://github.com/McMatthew"
                        className={styles.contactSocialLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.contactDocuments}>
              <div className={styles.contactDocGrid}>
                <div>
                  <h3 className={styles.contactDocSectionTitle}>Documenti_Candidatura</h3>
                  <div className={styles.contactDocCard}>
                    <h4 className={styles.contactDocTitle}>Curriculum Vitae</h4>
                    <p className={styles.contactDocDesc}>
                      Un personale riepilogo, molto sintetico, di quali strumenti conosco e le
                      esperienze fatte fino ad oggi.
                    </p>
                    <a href={cvPdf} download="matteo_bianchi_cv.pdf" className={styles.btnDark}>
                      <Icon name="download" size={18} /> SCARICA_PDF
                    </a>
                  </div>
                </div>
                <div>
                  <div className={styles.contactDocCard}>
                    <h4 className={styles.contactDocTitle}>Lettera di presentazione</h4>
                    <p className={styles.contactDocDesc}>
                      Presentarsi bene è il primo passo verso una buona impressione. Scopri le mie
                      motivazioni.
                    </p>
                    <a href={letteraPdf} download="matteo_bianchi_lettera.pdf" className={styles.btnDark}>
                      <Icon name="download" size={18} /> SCARICA_PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className={styles.quoteSection}>
          <p className={styles.quote}>"Non domandarti mai dove vai, solo fallo bene."</p>
          <p className={styles.quoteAuthor}>— CHANDRA LIVIA CANDIANI</p>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerCopy}>© 2024 MATTEO BIANCHI // FRONT-END SYSTEMS</div>
        <div className={styles.footerLinks}>
          <a
            href="https://github.com/McMatthew"
            className={styles.footerLink}
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/matteo-bianchi-701b76263/"
            className={styles.footerLink}
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a href="https://github.com/McMatthew/portfolio" className={styles.footerLink} target="_blank" rel="noreferrer">
            SOURCE
          </a>
        </div>
      </footer>
    </div>
  );
}
