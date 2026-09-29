import { useState } from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import team from "../data/team";
import "./ExpertsSection.css";
const socialIcons = [
  { key: "twitter", Icon: FaXTwitter },
  { key: "facebook", Icon: FaFacebookF },
  { key: "linkedin", Icon: FaLinkedinIn },
  { key: "instagram", Icon: FaInstagram },
];
const categories = ["All", "Admin", "Technical", "Guest Speaker"];

// Lookup object — category onujayi button-er text
const buttonLabels = {
  All: "All Members",
  Admin: "All Admins",
  Technical: "All Technical Members",
  "Guest Speaker": "All Guest Speakers",
};

const perPage = 3;

function ExpertsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(0);

  const filtered =
    activeCategory === "All"
      ? team
      : team.filter((m) => m.category === activeCategory);
  const totalPages = Math.ceil(filtered.length / perPage);
  const visible = filtered.slice(page * perPage, page * perPage + perPage);

  function selectCategory(cat) {
    setActiveCategory(cat);
    setPage(0); // notun category select korle page 0 theke abar shuru
  }

  return (
    <section className="experts">
      <span className="experts-eyebrow">Our Team</span>
      <h2>Meet Our Members</h2>
      <p className="experts-subtitle">
        The people behind HGRTC's research and training — leadership, faculty
        trainers, researchers, and the guest speakers who join our sessions.
      </p>

      <div className="experts-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`experts-tab ${activeCategory === cat ? "active" : ""}`}
            onClick={() => selectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="experts-grid">
        {visible.map((m) => (
          <div className="expert-card" key={m.id}>
            <div className="expert-photo-wrap">
              <img src={m.photo} alt={m.name} className="expert-photo" />
            </div>
            <h3>{m.name}</h3>
            <span className="expert-badge">{m.role}</span>
            <p>{m.bio}</p>
            <div className="expert-socials">
              {socialIcons
                .filter(({ key }) => m.links?.[key])
                .map(({ key, Icon }) => (
                  <a
                    href={m.links[key]}
                    key={key}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon />
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="experts-nav">
        <button
          className="nav-arrow"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          <FaArrowLeft />
        </button>
        <button
          className="nav-arrow"
          disabled={page >= totalPages - 1}
          onClick={() => setPage(page + 1)}
        >
          <FaArrowRight />
        </button>
      </div>

      <a href="#" className="experts-cta">
        {buttonLabels[activeCategory]}
        <span className="cta-arrow">
          <FaArrowRight />
        </span>
      </a>
    </section>
  );
}

export default ExpertsSection;
