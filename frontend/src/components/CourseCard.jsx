import './CourseCard.css';

function CourseCard({ image, icon, title, desc }) {
  return (
    <div className="course-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="course-card-overlay">
        <span className="course-icon">{icon}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default CourseCard;