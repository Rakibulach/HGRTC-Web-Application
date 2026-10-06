import { useParams, Link } from 'react-router-dom';
import { FaFacebookF, FaXTwitter, FaWhatsapp, FaPinterestP, FaRegClock, FaPhone } from 'react-icons/fa6';
import blogs from '../data/blogs';
import './BlogDetail.css';

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <section style={{ padding: "64px 24px", textAlign: "center" }}>
        <h2>Blog post not found</h2>
        <Link to="/">← Back to Home</Link>
      </section>
    );
  }

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);
  const categories = [...new Set(blogs.map((b) => b.category))];

  return (
    <>
      <section className="blog-hero">
        <div className="blog-hero-text">
          <span className="blog-eyebrow">Insight</span>
          <h1>{blog.title}</h1>
          <div className="blog-byline">{blog.author} &nbsp;—&nbsp; {blog.date}</div>
        </div>
        <div className="blog-hero-image" style={{ backgroundImage: `url(${blog.image})` }}></div>
      </section>

      <section className="blog-body">
        <div className="blog-main">
          <h2>{blog.intro.heading}</h2>
          <p>{blog.intro.paragraph}</p>

          {blog.sections.map((s, i) => (
            <div key={i}>
              <h3>{s.heading}</h3>
              {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              {s.list && (
                <ol className="blog-list">
                  {s.list.map((item, k) => <li key={k}>{item}</li>)}
                </ol>
              )}
            </div>
          ))}

          <div className="blog-gallery">
            {blog.gallery.map((img, i) => (
  <img src={img} alt="" loading="lazy" key={i} />
))}
          </div>
          <div className="blog-dots">
            {blog.gallery.map((_, i) => (
              <span className={`dot ${i === 1 ? "active" : ""}`} key={i}></span>
            ))}
          </div>

          <h3>{blog.conclusionHeading}</h3>
          <p>{blog.conclusion}</p>

          <div className="blog-share">
            <span>Share This:</span>
            <div className="blog-share-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaPinterestP /></a>
            </div>
          </div>
        </div>

        <aside className="blog-sidebar">
          <div className="sidebar-block">
            <h4>Related Post</h4>
            <div className="related-list">
              {related.map((r) => (
                <Link to={`/blog/${r.id}`} className="related-item" key={r.id}>
                  <img src={r.image} alt={r.title} />
                  <div>
                    <span className="related-date"><FaRegClock /> {r.date}</span>
                    <p>{r.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="consult-box">
            <h4>Get Consultation</h4>
            <p>Placeholder — real consultation info HGRTC theke asle boshanor.</p>
            <div className="consult-box-phone"><FaPhone /> +880 1817 643833</div>
          </div>

          <div className="sidebar-block">
            <h4>Category</h4>
            <ul className="category-list">
              {categories.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}

export default BlogDetail;