import CourseCard from "./CourseCard";
import RevealCard from "./RevealCard";
import services from "../data/services";
import "./TrainingSection.css";

// Homepage-e shudhu prothom 3ta, baki shob /services page-e
const featured = services.slice(0, 3);

function TrainingSection() {
  return (
    <section className="training">
      <div className="training-header">
        <h2>Let's Explore Our Training Insights</h2>
        <p className="training-subtitle">
          Hands-on, lab-based courses in PCR, sequencing, karyotyping and more — built to teach real technique, not just theory.
        </p>
      </div>
      <div className="training-grid">
        {featured.map((s, i) => (
          <RevealCard key={s.id} index={i}>
            <CourseCard
              image={s.image}
              icon={<s.Icon />}
              title={s.title}
              desc={s.desc}
            />
          </RevealCard>
        ))}
      </div>
    </section>
  );
}

export default TrainingSection;
