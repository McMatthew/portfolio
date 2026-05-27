import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import cvPdf from '../assets/matteo_bianchi_cv.pdf';
import { Header } from '../components/Header/Header';

function Icon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <span className={styles.icon} style={{ fontSize: size }}>
      {name}
    </span>
  );
}

export function ProjectsPage() {
  return (
    <div className={styles.root}>
      <Header />

      {/* ── Main ── */}
      <main className={`${styles.main} ${styles.gridBg}`}>
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>I PROGETTI</h1>
            <p className={styles.sectionSubtitle}>
              System_Manifest // Current_Portfolio_Build_v2
            </p>
          </div>

          {/* Project Module Grid */}
          <div className={styles.moduleGrid}>
            {/* MODULE 001 — DASF (large) */}
            <article className={`${styles.moduleCard} ${styles.moduleCardLarge}`}>
              <div className={styles.moduleCardHeader}>
                <span className={styles.moduleId}>MODULE_ID: 001_DASF</span>
                <div className={styles.statusDots}>
                  <div className={styles.statusDot} />
                  <div className={`${styles.statusDot} ${styles.statusDotDim}`} />
                </div>
              </div>
              <div className={styles.moduleCardBody}>
                <div className={styles.moduleCardTop}>
                  <h2 className={styles.moduleTitle}>DASF</h2>
                  <Icon name="code_blocks" size={36} />
                </div>
                <p className={styles.moduleDesc}>
                  Creazione di specifiche JSON per documentare richieste UDP (simile a YAML per
                  HTTP) tramite un linguaggio custom. Include un editor di codice live e
                  visualizzatore documentazione.
                </p>
                <div className={styles.moduleTags}>
                  <span className={styles.moduleTag}>REACT</span>
                  <span className={styles.moduleTag}>VITE</span>
                  <span className={styles.moduleTag}>JSON_SPEC</span>
                </div>
                <a
                  href="https://mcmatthew.github.io/dasf/"
                  className={styles.moduleLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  ACCESS_ENDPOINT <Icon name="arrow_forward" size={18} />
                </a>
              </div>
            </article>

            {/* MODULE 002 — Cloud Web App (medium) */}
            <article className={`${styles.moduleCard} ${styles.moduleCardMedium}`}>
              <div className={styles.moduleCardHeader}>
                <span className={styles.moduleId}>MODULE_ID: 002_CLOUD_DRIVE</span>
              </div>
              <div className={styles.moduleCardBody}>
                <h2 className={styles.moduleTitle}>Cloud Web App</h2>
                <div className={styles.moduleStatus}>SYSTEM_STATUS: DEPLOYED</div>
                <p className={`${styles.moduleDesc} ${styles.moduleDescSm}`}>
                  Gestione autoscuola 360°: contabilità e appuntamenti. Architettura Kubernetes,
                  client React, backend Kotlin e Quarkus con interfacce REST ad alte prestazioni.
                </p>
                <div className={styles.moduleTechGrid}>
                  {['KOTLIN', 'KUBE', 'QUARKUS', 'AWS'].map((tech) => (
                    <div key={tech} className={styles.moduleTechItem}>
                      <span>{tech}</span>
                      <div className={styles.statusDot} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.moduleProgressBar}>
                <div className={styles.moduleProgressTrack}>
                  <div className={styles.moduleProgressFill} style={{ width: '80%' }} />
                </div>
                <span className={styles.moduleProgressLabel}>OPTIM_80%</span>
              </div>
            </article>

            {/* MODULE 003 — Messaging App */}
            <article className={`${styles.moduleCard} ${styles.moduleCardSmall}`}>
              <div className={styles.moduleCardImageWrapper}>
                <div className={styles.moduleCardImagePlaceholder}>
                  <Icon name="chat" size={48} />
                </div>
                <div className={styles.moduleCardImageBadge}>VER: 2.1</div>
              </div>
              <div className={styles.moduleCardBody}>
                <h2 className={styles.moduleTitle}>Messaging App</h2>
                <p className={`${styles.moduleDesc} ${styles.moduleDescSm}`}>
                  Aggregatore di protocolli messaggistica (mail, WhatsApp, propretario e SMS). React con NextJS e Redux per
                  gestione state e REST APIs.
                </p>
                <div className={styles.moduleTagsOrange}>
                  <span className={styles.moduleTagOrange}>NEXT.JS</span>
                  <span className={styles.moduleTagOrange}>REDUX</span>
                </div>
              </div>
            </article>

            {/* MODULE 004 — Controllo Simulatore (dark card) */}
            <article className={`${styles.moduleCardDark} ${styles.moduleCardSmall}`}>
              <div>
                <div className={styles.moduleCardDarkTop}>
                  <Icon name="precision_manufacturing" size={36} />
                  <span className={styles.moduleCardDarkStatus}>HW_LINK: ACTIVE</span>
                </div>
                <h2 className={styles.moduleTitleWhite}>Controllo Simulatore</h2>
                <p className={styles.moduleDescWhite}>
                  Interfaccia Electron per test medici su simulatore di guida. Generazione report
                  automatica per valutazione idoneità alla guida in caso di disabilità.
                </p>
              </div>
              <div className={styles.moduleCardDarkBottom}>
                <div className={styles.avatarGroup}>
                  {['RE', 'EL', 'RX'].map((init) => (
                    <div key={init} className={styles.avatar}>
                      {init}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* MODULE 005 — SONDA (legacy) */}
            <article className={`${styles.moduleCardLegacy} ${styles.moduleCardSmall}`}>
              <div className={styles.moduleCardBody}>
                <div className={styles.legacyBadge}>
                  <span className={styles.legacyDot} />
                  <span className={styles.legacyText}>LEGACY_PROJECT</span>
                </div>
                <h2 className={styles.moduleTitle}>SONDA</h2>
                <p className={`${styles.moduleDesc} ${styles.moduleDescSm}`}>
                  Piattaforma di survey, progetto di maturità focalizzato su architettura database
                  SQL e diagrammi ER efficienti. Uno dei primi progetti del mio percorso formativo.
                </p>
                <div className={styles.legacyMetrics}>
                  <div className={styles.legacyMetricRow}>
                    <span>SQL_DB_INTEGRITY</span>
                    <span>95%</span>
                  </div>
                  <div className={styles.legacyBar}>
                    <div className={styles.legacyBarFill} style={{ width: '95%' }} />
                  </div>
                  <div className={styles.legacyMetricRow}>
                    <span>JS_LEGACY_CORE</span>
                    <span>100%</span>
                  </div>
                  <div className={styles.legacyBar}>
                    <div className={styles.legacyBarFill} style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
              <div className={styles.sondaIconArea}>
                <Icon name="database" size={48} />
              </div>
            </article>
          </div>

          {/* Documentation / Experience block */}
          <div className={styles.docBlock}>
            <div className={styles.docBlockText}>
              <h3 className={styles.docBlockTitle}>Experience &amp; Vision</h3>
              <p className={styles.docBlockBody}>
                "Lavoro come full-stack developer, specializzato in architetture cloud e piattaforme desktop moderne come Electrone e React Native.<br/>Il mio impegno costante è rivolto all'innovazione e all'ampliamento delle mie conoscenze."
              </p>
              <blockquote className={styles.docBlockQuote}>
                "Non domandarti mai dove vai, solo fallo bene." — Chandra Livia Candiani
              </blockquote>
            </div>
            <div className={styles.docBlockStats}>
              <div className={styles.docStatsHeader}>
                <span className={styles.docStatsLabel}>System_Stats</span>
                <span className={styles.docStatsCode}>0x4F2A</span>
              </div>
              <div className={styles.docStatsGrid}>
                <div className={styles.docStatCard}>
                  <span className={styles.docStatName}>Clean Code</span>
                  <div className={styles.docStatValue}>80%</div>
                </div>
                <div className={styles.docStatCard}>
                  <span className={styles.docStatName}>Problem Solving</span>
                  <div className={styles.docStatValue}>100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <a
            href="https://github.com/McMatthew/portfolio"
            className={styles.footerLink}
            target="_blank"
            rel="noreferrer"
          >
            SOURCE
          </a>
        </div>
      </footer>
    </div>
  );
}
