import { FaCircleInfo } from 'react-icons/fa6';
import './EventCard.css';

function EventCard({ image, date, location, title, buttonText }) {
  return (
    <div className="event-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="event-card-top">
        <span className="event-date-badge">{date}</span>
        <span className="event-info-icon"><FaCircleInfo /></span>
      </div>
      <div className="event-card-bottom">
        <span className="event-location">🇧🇩 {location}</span>
        <h3>{title}</h3>
        <button className="event-register-btn">{buttonText}</button>
      </div>
    </div>
  );
}

export default EventCard;