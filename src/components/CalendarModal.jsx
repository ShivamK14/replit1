import React from 'react';
import './CalendarModal.css';

const CalendarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-left-panel">
          <div className="modal-logo" onClick={onClose}>ADMATRICA</div>
          <h2>Kostenloses<br />Erstgespräch mit<br />ADMATRICA Founder<br />Florian Edlinger</h2>
          <p>Lerne in einem kostenlosen Termin<br />alles über den 3-monatigen Testlauf.<br />Wähle einfach Datum und Uhrzeit -<br />und los geht's!</p>
          <p>Wir freuen uns, dich kennen zu lernen!</p>
        </div>

        <div className="modal-middle-panel">
          <div className="calendar-header">
            <h3>Juni 2025</h3>
            <div className="nav-arrows">
              <span>&lt;</span>
              <span>&gt;</span>
            </div>
          </div>
          <div className="calendar-grid-days">
            <span>MO</span>
            <span>DI</span>
            <span>MI</span>
            <span>DO</span>
            <span>FR</span>
            <span>SA</span>
            <span>SO</span>
          </div>
          <div className="calendar-grid-dates">
            {/* Placeholder for dates */}
            <span className="empty"></span>
            <span className="empty"></span>
            <span className="empty"></span>
            <span className="empty"></span>
            <span className="empty"></span>
            <span className="date">1</span>
            <span className="date">2</span>
            <span className="date">3</span>
            <span className="date">4</span>
            <span className="date">5</span>
            <span className="date">6</span>
            <span className="date">7</span>
            <span className="date">8</span>
            <span className="date">9</span>
            <span className="date">10</span>
            <span className="date">11</span>
            <span className="date">12</span>
            <span className="date selected-date">13</span>
            <span className="date">14</span>
            <span className="date">15</span>
            <span className="date active-date">16</span>
            <span className="date">17</span>
            <span className="date">18</span>
            <span className="date">19</span>
            <span className="date">20</span>
            <span className="date">21</span>
            <span className="date">22</span>
            <span className="date active-date">23</span>
            <span className="date active-date">24</span>
            <span className="date active-date">25</span>
            <span className="date active-date">26</span>
            <span className="date active-date">27</span>
            <span className="date">28</span>
            <span className="date">29</span>
            <span className="date">30</span>
          </div>
        </div>

        <div className="modal-right-panel">
          <h4>Fr 13</h4>
          <div className="duration-buttons">
            <button className="duration-button selected">30 min</button>
            <button className="duration-button">1 h</button>
            <button className="duration-button">2 h</button>
          </div>
          <div className="time-slots">
            <button className="time-slot selected">14:00</button>
            <button className="time-slot">14:30</button>
            <button className="time-slot">15:00</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal; 