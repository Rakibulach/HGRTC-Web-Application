import './ResearchSection.css';

const categories = [
  "Human Genetics", "Genomics", "Molecular Biology",
  "Molecular Diagnostics", "Precision Medicine", "Biomedical Research",
];

function ResearchSection() {
  return (
    <section className="research">
      <h2>Research</h2>
      <ul className="research-list">
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <a href="#" className="research-link">Explore Research →</a>
    </section>
  );
}

export default ResearchSection;