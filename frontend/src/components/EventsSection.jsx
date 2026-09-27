import EventCard from './EventCard';
import eventImg1 from '../assets/images/event-1.png';
import eventImg2 from '../assets/images/event-2.webp';
import eventImg3 from '../assets/images/event-3.jpg';
import './EventsSection.css';

// Placeholder — real date/location HGRTC theke asle update hobe
const events = [
  { image: eventImg1, date: "TBA", location: "HGRTC, Farmgate", title: "Genetic Counseling Workshop", buttonText: "Register Now" },
  { image: eventImg2, date: "TBA", location: "HGRTC, Farmgate", title: "Guest Lecture Series", buttonText: "Book Now" },
  { image: eventImg3, date: "TBA", location: "HGRTC, Farmgate", title: "Research Symposium", buttonText: "Register Now" },
];

function EventsSection() {
  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {events.map((ev, i) => (
          <EventCard key={i} {...ev} />
        ))}
      </div>
    </section>
  );
}

export default EventsSection;