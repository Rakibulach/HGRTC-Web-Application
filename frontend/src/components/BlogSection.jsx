import RevealCard from "./RevealCard";
import blogs from "../data/blogs";
import BlogCard from "./BlogCard";
import "./BlogSection.css";

function BlogSection() {
  return (
    <section className="blog-section">
      <h2>Read Our Latest Blog</h2>
      <p className="blog-subtitle">
        Placeholder subtitle — real intro text pore boshbe.
      </p>
      <div className="blog-grid">
        {blogs.map((b, i) => (
          <RevealCard key={b.id} index={i}>
            <BlogCard {...b} />
          </RevealCard>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
