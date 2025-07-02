import React, { useState } from 'react';
import './App.css';
import './index.css'; // Ensure this is imported for global styles
import CalendarModal from './components/CalendarModal';
import googlePartnerLogo from './assets/google-partner.png';
import hubspotLogo from './assets/hubspot.png';
import linkedinIcon from './assets/linkedin.png';
import youtubeIcon from './assets/youtube.png';
import instagramIcon from './assets/instagram.png';
import facebookIcon from './assets/facebook.png';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Header will go here */}
      <header className="header">
        <div className="logo" onClick={handleCloseModal}>ADMATRICA</div>
        <nav className="nav">
          <ul>
            <li><a href="#">System</a></li>
            <li><a href="#">Leistungen</a></li>
            <li><a href="#">Ergebnisse</a></li>
            <li><a href="#">Einblicke</a></li>
            <li><a href="#">Über uns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </nav>
        <button className="test-button" onClick={handleOpenModal}>Testen</button>
      </header>

      {/* Hero section will go here */}
      <main className="hero-section">
        <div className="hero-content-left">
          <h1>ADM+ AI -<br />Ein Marketing-System,<br />das für dich arbeitet.</h1>
          <p>ADMATRICA DIGITAL bringt dir messbare Ergebnisse - mit System. Wir bauen für dich automatisierte Marketing- und Salesmaschinen, die konstant Sichtbarkeit schaffen, Kunden gewinnen und Umsatz bringen.</p>
          <button className="call-to-action-button">Jetzt Testen</button>
          <p className="powered-by-text">Sprich mit unserem Marketing-Consultant aus Österreich<br />powered by künstlicher Intelligenz</p>
        </div>
        <div className="hero-graphic-right">
          {/* Placeholder for the complex AI graphic */}
          <div className="ai-graphic-placeholder">
            <span className="ai-text">AI</span>
          </div>
        </div>
      </main>

      {/* Client Logos Section */}
      <section className="client-logos-section">
        <div className="gradient-wave-bg"></div>
        <div className="logos-container">
          <span className="client-logo">GRAZ</span>
          <span className="client-logo">SPAR</span>
          <span className="client-logo">TREIBACHER</span>
          <span className="client-logo">GRAZ</span>
          <span className="client-logo">TREIBACHER</span>
        </div>
      </section>

      {/* Automatisiert Section */}
      <section className="automated-section">
        <h2>Automatisiert. Verständlich. Verlässlich.</h2>
        <p>Du weißt, was funktioniert. Du siehst, was es bringt. Und du<br />kannst dich darauf verlassen, dass es läuft.</p>
      </section>

      {/* Mehr Wirkung. Weniger Aufwand. Section */}
      <section className="impact-section">
        <h2>Mehr Wirkung.<br />Weniger Aufwand.</h2>

        <h3>Was unsere Kunden wirklich wollen:</h3>
        <div className="customer-wants-grid">
          <div className="grid-item">
            <div className="icon-placeholder">+</div> {/* Placeholder icon */}
            <p>Planbar mehr<br />Anfragen</p>
          </div>
          <div className="grid-item">
            <div className="icon-placeholder">📊</div> {/* Placeholder icon */}
            <p>Echte Performance,<br />kein Schönreden</p>
          </div>
          <div className="grid-item">
            <div className="icon-placeholder"> funnel </div> {/* Placeholder icon */}
            <p>Funnel-Strukturen,<br />die automatisch<br />arbeiten</p>
          </div>
          <div className="grid-item">
            <div className="icon-placeholder">🔗</div> {/* Placeholder icon */}
            <p>Eine klare<br />Strategie, die sich<br />gut anfühlt</p>
          </div>
          <div className="grid-item">
            <div className="icon-placeholder">🛡️</div> {/* Placeholder icon */}
            <p>Sicherheit, dass es<br />läuft - auch ohne<br />ständige Kontrolle</p>
          </div>
        </div>
      </section>

      <CalendarModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-col footer-admatrica">
            <h2 className="footer-logo">ADMATRICA</h2>
            <p>Was unterscheidet euch von anderen Agenturen?</p>
          </div>
          <div className="footer-col footer-contact">
            <h3>KONTAKT</h3>
            <p>Zandlach 134,<br />9815 Reißbeck, Austria</p>
            <p>T: +43 316 455 020</p>
            <p>M: office@admatrica.at</p>
          </div>
          <div className="footer-col footer-sonstiges">
            <h3>SONSTIGES</h3>
            <ul>
              <li><a href="#">Datenschutz</a></li>
              <li><a href="#">Impressum</a></li>
              <li><a href="#">AGB</a></li>
            </ul>
          </div>
          <div className="footer-col footer-mehr-entdecken">
            <h3>MEHR ENTDECKEN</h3>
            <div className="social-icons">
              {/* Placeholder for social media icons */}
              <a href="#" className="social-icon"><img src={linkedinIcon} alt="LinkedIn" /></a>
              <a href="#" className="social-icon"><img src={youtubeIcon} alt="YouTube" /></a>
              <a href="#" className="social-icon"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="#" className="social-icon"><img src={facebookIcon} alt="Facebook" /></a>
            </div>
          </div>
          <div className="footer-col footer-zertifiziert">
            <h3>ZERTIFIZIERT & SICHER</h3>
            <div className="certification-logos">
              {/* Placeholder for certification logos */}
              <img src={googlePartnerLogo} alt="Google Partner" className="google-partner-logo" />
              <img src={hubspotLogo} alt="HubSpot" className="hubspot-logo" />
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2025 ADMATRICA. Alle Rechte vorbehalten.</p>
        </div>
      </div>

      <div className="footer-floating-buttons">
        <div className="footer-chat-button">💬</div>
        <div className="footer-scroll-up-button" onClick={handleScrollToTop}>▲</div>
      </div>
    </div>
  );
}

export default App;
