import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import styles from './Contact.module.css';
import cvPdf from '../assets/matteo_bianchi_cv.pdf';
import letteraPdf from '../assets/matteo_bianchi_lettera.pdf';

const EMAILJS_SERVICE_ID      = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_CONFIRM   = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRM;
const EMAILJS_TEMPLATE_INTERNAL  = import.meta.env.VITE_EMAILJS_TEMPLATE_INTERNAL;
const EMAILJS_PUBLIC_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Icon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <span className={styles.icon} style={{ fontSize: size }}>
      {name}
    </span>
  );
}

const CHANNELS = [
  {
    label: 'PHONE_PROTO',
    display: '392 275 8741',
    href: 'tel:+393922758741',
    icon: 'call',
  },
  {
    label: 'SMTP_ENDPOINT',
    display: 'MATTEO BIANCHI [GMAIL]',
    href: 'mailto:matteo.bianchi@gmail.com',
    icon: 'mail',
  },
  {
    label: 'PROFESSIONAL_NODES',
    display: 'LINKEDIN/MATTEO-BIANCHI',
    href: 'https://www.linkedin.com/in/matteo-bianchi-701b76263/',
    icon: 'share',
  },
  {
    label: 'REPOS_PRIMARY',
    display: 'GITHUB/MCMATTHEW',
    href: 'https://github.com/McMatthew',
    icon: 'code',
  },
];

export function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'PROJECT_PROPOSAL',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError(null);
    try {
      await Promise.all([
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONFIRM, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY }),
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_INTERNAL, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY }),
      ]);
      setSubmitted(true);
    } catch {
      setError('TRANSMISSION_FAILED — riprova più tardi.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={`${styles.root} ${styles.gridBg}`}>
      {/* ── Header ── */}
      <header className={styles.header}>
        <div className={styles.logo}>Matteo Bianchi</div>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>HOME</Link>
          <Link to="/projects" className={styles.navLink}>PROJECTS</Link>
          <Link to="/skills" className={styles.navLink}>SKILLS</Link>
          <span className={`${styles.navLink} ${styles.navLinkActive}`}>CONTACT</span>
        </nav>
        <div className={styles.headerActions}>
          <a href={cvPdf} download="matteo_bianchi_cv.pdf" className={styles.btnDownload}>DOWNLOAD_CV</a>
          <span className={`${styles.icon} ${styles.terminalIcon}`} style={{ fontSize: 24 }}>
            terminal
          </span>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <p className={styles.sectionModuleId}>MODULE_ID: CONTACT_01</p>
            <h1 className={styles.sectionTitle}>Contatti</h1>
            <p className={styles.sectionDesc}>
              Non esitare a contattarmi per qualunque informazione o opportunità. Ricevo input
              tramite protocolli standard e rispondo entro 24 ore lavorative.
            </p>
          </div>

          {/* Main Grid */}
          <div className={styles.mainGrid}>
            {/* Left: Spec Sheet */}
            <div className={styles.leftPanel}>
              <div className={styles.specSheet}>
                <div className={styles.specSheetBadge}>SPEC_SHEET_V2</div>
                <h2 className={styles.specSheetTitle}>COMMUNICATION_CHANNELS</h2>
                <ul className={styles.channelList}>
                  {CHANNELS.map((ch) => (
                    <li key={ch.label} className={styles.channelItem}>
                      <span className={styles.channelLabel}>{ch.label}</span>
                      <div className={styles.channelRow}>
                        <a href={ch.href} className={styles.channelLink} target={ch.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                          {ch.display}
                        </a>
                        <span className={`${styles.icon} ${styles.channelIcon}`} style={{ fontSize: 20 }}>
                          {ch.icon}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability panel */}
              <div className={styles.availabilityPanel}>
                <div className={styles.availabilityRow}>
                  <div className={styles.availabilityLeft}>
                    <p className={styles.availabilityLabel}>Availability status</p>
                    <div className={styles.stepIndicator}>
                      {[true, true, true, true, false].map((active, i) => (
                        <div
                          key={i}
                          className={active ? styles.stepSegmentActive : styles.stepSegment}
                        />
                      ))}
                    </div>
                  </div>
                  <span className={styles.availabilityStatus}>READY_FOR_HOOKS</span>
                </div>
              </div>
            </div>

            {/* Right: Input Console */}
            <div className={styles.rightPanel}>
              <div className={styles.console}>
                <div className={styles.consoleHeader}>
                  <span className={styles.consoleTitle}>INPUT_CONSOLE</span>
                  <div className={styles.consoleDots}>
                    <div className={styles.consoleDotActive} />
                    <div className={styles.consoleDotInactive} />
                  </div>
                </div>

                {submitted ? (
                  <div className={styles.successMsg}>
                    <Icon name="check_circle" size={32} />
                    <p className={styles.successTitle}>PACKET_SENT</p>
                    <p className={styles.successDesc}>
                      Messaggio inviato con successo. Protocollo di risposta inizializzato.
                    </p>
                    <button
                      className={styles.resetBtn}
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: 'PROJECT_PROPOSAL', message: '' }); }}
                    >
                      NUOVO_MESSAGGIO
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formField}>
                        <label className={styles.formLabel}>Sender_ID</label>
                        <input
                          name="from_name"
                          type="text"
                          placeholder="NAME / COMPANY"
                          className={styles.formInput}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div className={styles.formField}>
                        <label className={styles.formLabel}>Return_Path</label>
                        <input
                          name="from_email"
                          type="email"
                          placeholder="EMAIL_ADDRESS"
                          className={styles.formInput}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.formLabel}>Subject_Header</label>
                      <select
                        name="subject"
                        className={styles.formSelect}
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      >
                        <option>PROJECT_PROPOSAL</option>
                        <option>EMPLOYMENT_QUERY</option>
                        <option>TECHNICAL_COLLAB</option>
                        <option>GENERAL_HELLO</option>
                      </select>
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.formLabel}>Payload_Body</label>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="WRITE_MESSAGE_HERE..."
                        className={styles.formTextarea}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>
                    {error && <p className={styles.errorMsg}>{error}</p>}
                    <div className={styles.formSubmitRow}>
                      <button type="submit" className={styles.submitBtn} disabled={sending}>
                        {sending ? 'TRANSMITTING...' : <>Execute_Send <Icon name="send" size={18} /></>}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Document Downloads */}
          <div className={styles.docsGrid}>
            <div className={styles.docCard}>
              <div className={styles.docCardTop}>
                <Icon name="description" size={36} />
                <a href={cvPdf} download="matteo_bianchi_cv.pdf" className={styles.docDownloadBtn}>
                  Download
                </a>
              </div>
              <h3 className={styles.docCardTitle}>Curriculum Vitae</h3>
              <p className={styles.docCardDesc}>
                Un personale riepilogo, molto sintetico, di quali strumenti conosco e le esperienze
                fatte fino ad oggi.
              </p>
            </div>
            <div className={styles.docCard}>
              <div className={styles.docCardTop}>
                <Icon name="history_edu" size={36} />
                <a href={letteraPdf} download="matteo_bianchi_lettera.pdf" className={styles.docDownloadBtn}>Download</a>
              </div>
              <h3 className={styles.docCardTitle}>Lettera di presentazione</h3>
              <p className={styles.docCardDesc}>
                Presentarsi bene è il primo passo verso una buona impressione. Motivazioni e visione
                professionale.
              </p>
            </div>
          </div>

          {/* Location Banner */}
          <div className={styles.locationBanner}>
            <div className={styles.locationDots}>
              <div className={styles.locationDot} />
              <div className={styles.locationDot} />
              <div className={styles.locationDot} />
            </div>
            <div className={styles.locationCoord}>
              MY_LOC_COORD: 45.9896777° N,8.7415789° E [LUINO_IT]
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerCopy}>© 2024 MATTEO BIANCHI // FRONT-END SYSTEMS</div>
        <div className={styles.footerLinks}>
          <a href="https://github.com/McMatthew" className={styles.footerLink} target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://www.linkedin.com/in/matteo-bianchi-701b76263/" className={styles.footerLink} target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href="https://github.com/McMatthew/portfolio" className={styles.footerLink} target="_blank" rel="noreferrer">SOURCE</a>
        </div>
      </footer>
    </div>
  );
}
