import RevealCard from "./RevealCard";
import CourseCard from "./CourseCard";
import { FaDna, FaChartLine, FaMicroscope } from "react-icons/fa6";
import trainingImg1 from "../assets/images/training-1.avif";
import trainingImg2 from "../assets/images/training-2.avif";
import trainingImg3 from "../assets/images/training-3.jpg";
import "./TrainingSection.css";

const courses = [
  {
    image: trainingImg1,
    icon: <FaDna />,
    title: "Real-Time PCR",
    desc: "Hands-on training in Real-Time PCR techniques and analysis.",
  },
  {
    image: trainingImg2,
    icon: <FaChartLine />,
    title: "Sanger Sequencing",
    desc: "Learn DNA sequencing methods using the Sanger sequencing technique.",
  },
  {
    image: trainingImg3,
    icon: <FaMicroscope />,
    title: "Karyotyping",
    desc: "Chromosome analysis and karyotyping training for genetic studies.",
  },
];

function TrainingSection() {
  return (
    <section className="training">
      <div className="training-header">
        <h2>Let's Explore Our Training Insights</h2>
        <p className="training-subtitle">
          Placeholder subtitle — real intro text HGRTC theke asle boshanor.
        </p>
      </div>
      <div className="training-grid">
        {courses.map((c, i) => (
          <RevealCard key={c.title} index={i}>
            <CourseCard {...c} />
          </RevealCard>
        ))}
      </div>
    </section>
  );
}

export default TrainingSection;
