import { Link } from 'react-router-dom';
import './BlogCard.css';

function BlogCard({ id, image, date, title, excerpt }) {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-card-img" />
      <div className="blog-card-body">
        <span className="blog-date">{date}</span>
        <h3><Link to={`/blog/${id}`}>{title}</Link></h3>
        <p>{excerpt}</p>
        <Link to={`/blog/${id}`} className="blog-readmore">Read More →</Link>
      </div>
    </div>
  );
}

export default BlogCard;