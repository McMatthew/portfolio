import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Skills.module.css';
import cvPdf from '../assets/matteo_bianchi_cv.pdf';
import letteraPdf from '../assets/matteo_bianchi_lettera.pdf';
import { Header } from '../components/Header/Header';

function Icon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <span className={styles.icon} style={{ fontSize: size }}>
      {name}
    </span>
  );
}

function SteppedBar({ pct }: { pct: number }) {
  const total = 20;
  const active = Math.round((pct / 100) * total);
  return (
    <div className={styles.steppedBar}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={i < active ? styles.steppedBarCellActive : styles.steppedBarCell}
        />
      ))}
    </div>
  );
}

const HARD_SKILLS = [
  { name: 'TESTING', pct: 70 },
  { name: 'CLEAN CODE', pct: 80 },
  { name: 'RESPONSIVE', pct: 75 },
  { name: 'BEST PRACTICE', pct: 100 },
];

const SOFT_SKILLS = [
  { name: 'AGILE', pct: 90 },
  { name: 'TEAM WORK', pct: 100 },
  { name: 'PROBLEM SOLVING', pct: 100 },
  { name: 'INIZIATIVA', pct: 80 },
];

export function SkillsPage() {
  const [cpuLoad, setCpuLoad] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(Math.floor(Math.random() * 21) + 30);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.root}>
      <Header />

      {/* ── Main ── */}
      <main className={`${styles.main} ${styles.gridBg}`}>
        <div className={styles.container}>
          {/* Hero */}
          <section className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <span className={styles.heroBadge}>V2.0 // FE_ENGINEER</span>
              <h1 className={styles.heroTitle}>SKILLS &amp; PROFILE</h1>
              <p className={styles.heroDesc}>
                Un'analisi tecnica del mio percorso professionale. Dall'architettura Kubernetes al
                perfezionamento del Clean Code, ogni competenza è un modulo di un sistema più ampio
                in continua evoluzione.
              </p>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.statusCard}>
                <div className={styles.statusCardHeader}>
                  <span className={styles.statusCardLabel}>SYSTEM_STATUS</span>
                  <span className={styles.statusOnline} />
                </div>
                <div className={styles.statusMetrics}>
                  <div className={styles.statusMetricRow}>
                    <span>CPU_LOAD</span>
                    <span className={styles.statusMetricValue}>{cpuLoad}%</span>
                  </div>
                  <div className={styles.statusBar}>
                    <div
                      className={styles.statusBarFill}
                      style={{ width: `${cpuLoad}%`, transition: 'width 1s ease' }}
                    />
                  </div>
                  <div className={`${styles.statusMetricRow} ${styles.statusMetricRowMt}`}>
                    <span>UPTIME</span>
                    <span>8760H</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid */}
          <div className={styles.bentoGrid}>
            {/* Chi sono? */}
            <div className={`${styles.whiteCard} ${styles.colSpan7}`}>
              <div className={styles.cardSectionHeader}>
                <Icon name="person" size={20} />
                <h2 className={styles.cardSectionTitle}>Chi sono?</h2>
              </div>
              <p className={styles.cardBody}>
                Beh se non si fosse ancora capito, io sono Matteo... Bianchi Matteo per la
                precisione, un nome un bel pò comune lo so, però il mio obiettivo è{' '}
                <strong className={styles.textBlue}>farmi riconoscere</strong>, se non dal nome
                beh... Dalla <em>qualità del mio lavoro</em>.
              </p>
              <p className={styles.cardBody}>
                Mi sono diplomato nel 2022. Da luglio di quell'anno ho lavorato a svariati progetti
                in React, Next, Vue e, principalmente, ad una applicazione in Cloud. Sono sempre
                disposto a "cambiare aria", non si sa mai cosa ha in serbo il futuro.
              </p>
              <div className={styles.quoteBlock}>
                <blockquote className={styles.quote}>
                  "Lavorare bene vuol dire costruire il proprio futuro oggi."
                </blockquote>
                <cite className={styles.quoteAuthor}>— Matteo Bianchi</cite>
              </div>
            </div>

            {/* Documents */}
            <div className={`${styles.colSpan5} ${styles.docStack}`}>
              <div className={`${styles.docCard} ${styles.docCardDark}`}>
                <span className={styles.docIndex}>DOC_01</span>
                <h3 className={styles.docCardTitle}>Curriculum Vitae</h3>
                <p className={styles.docCardDesc}>
                  Un riepilogo sintetico degli strumenti e delle esperienze fatte finora.
                </p>
                <a href={cvPdf} download="matteo_bianchi_cv.pdf" className={`${styles.docBtn} ${styles.docBtnFilled}`}>
                  Scarica PDF <Icon name="download" size={18} />
                </a>
              </div>
              <div className={styles.docCard}>
                <span className={styles.docIndex}>DOC_02</span>
                <h3 className={styles.docCardTitle}>Lettera di presentazione</h3>
                <p className={styles.docCardDesc}>
                  Le mie motivazioni e il valore aggiunto che posso portare al tuo team.
                </p>
                <a href={letteraPdf} download="matteo_bianchi_lettera.pdf" className={`${styles.docBtn} ${styles.docBtnOutline}`}>
                  Scarica PDF <Icon name="download" size={18} />
                </a>
              </div>
            </div>

            {/* Hard Skills */}
            <div className={`${styles.whiteCard} ${styles.colSpan6}`}>
              <div className={styles.cardSectionHeader}>
                <Icon name="memory" size={20} />
                <h2 className={styles.cardSectionTitle}>Hard skills</h2>
              </div>
              <p className={styles.cardCategoryLabel}>
                Technical specifications and proficiencies
              </p>
              <div className={styles.skillsList}>
                {HARD_SKILLS.map((s) => (
                  <div key={s.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{s.name}</span>
                      <span className={styles.skillPct}>{s.pct}%</span>
                    </div>
                    <SteppedBar pct={s.pct} />
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className={`${styles.whiteCard} ${styles.colSpan6}`}>
              <div className={styles.cardSectionHeader}>
                <Icon name="psychology" size={20} />
                <h2 className={styles.cardSectionTitle}>Soft skills</h2>
              </div>
              <p className={styles.cardCategoryLabel}>
                Interpersonal and methodological dynamics
              </p>
              <div className={styles.softSkillsGrid}>
                {SOFT_SKILLS.map((s) => (
                  <div key={s.name} className={styles.softSkillCard}>
                    <span className={styles.softSkillName}>{s.name}</span>
                    <div className={styles.softSkillPct}>{s.pct}%</div>
                    <div className={styles.softSkillBar}>
                      <div
                        className={styles.softSkillBarFill}
                        style={{ width: `${s.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${styles.softSkillCard} ${styles.softSkillCardFull}`}>
                <span className={styles.softSkillName}>PENSIERO CRITICO</span>
                <div className={styles.softSkillPct}>90%</div>
                <div className={styles.softSkillBar}>
                  <div className={styles.softSkillBarFill} style={{ width: '90%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <section className={styles.ctaBanner}>
            <div className={styles.ctaInner}>
              <div>
                <h3 className={styles.ctaTitle}>PROSSIMO LIVELLO</h3>
                <p className={styles.ctaDesc}>
                  Pronto a portare queste competenze in un nuovo ambiente di sviluppo.
                </p>
              </div>
              <Link to="/contact" className={styles.ctaBtn}>
                Mettiamoci in contatto
              </Link>
            </div>
          </section>
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
