import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGauge, FaBookOpen, FaGraduationCap, FaUser, FaArrowRightFromBracket, FaDownload, FaCircleCheck } from 'react-icons/fa6';
import { useAuth } from '../context/AuthContext';
import courses from '../data/courses';
import initialProgress from '../data/studentProgress';
import { downloadCertificate } from '../utils/generateCertificate';
import './StudentDashboard.css';

const tabs = [
  { key: "overview", label: "Overview", Icon: FaGauge },
  { key: "all-courses", label: "All Courses", Icon: FaBookOpen },
  { key: "my-courses", label: "Your Courses", Icon: FaGraduationCap },
  { key: "profile", label: "Profile", Icon: FaUser },
];

function StudentDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('hgrtc_progress');
    return saved ? JSON.parse(saved) : initialProgress;
  });

  useEffect(() => {
    localStorage.setItem('hgrtc_progress', JSON.stringify(progress));
  }, [progress]);

  function handleLogout() {
    logout();
    navigate('/');
  }

  function enroll(courseId) {
    if (progress.find((p) => p.courseId === courseId)) return;
    setProgress([...progress, { courseId, status: "in-progress", progress: 0 }]);
  }

  function courseById(id) {
    return courses.find((c) => c.id === id);
  }

  const completed = progress.filter((p) => p.status === "completed");
  const inProgress = progress.filter((p) => p.status === "in-progress");

  return (
    <div className="dash-layout">
      <aside className="dash-sidebar">
        <div className="dash-user">
          <div className="dash-avatar">{user?.name?.charAt(0)}</div>
          <div>
            <div className="dash-user-name">{user?.name}</div>
            <div className="dash-user-email">{user?.email}</div>
          </div>
        </div>

        <nav className="dash-nav">
          {tabs.map(({ key, label, Icon }) => (
            <button
              key={key}
              className={`dash-nav-item ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              <Icon /> {label}
            </button>
          ))}
        </nav>

        <button className="dash-logout" onClick={handleLogout}>
          <FaArrowRightFromBracket /> Logout
        </button>
      </aside>

      <main className="dash-main">
        {activeTab === "overview" && (
          <section>
            <h1>Welcome back, {user?.name}</h1>
            <p className="dash-subtitle">Here's where your training stands at HGRTC.</p>
            <div className="dash-stats">
              <div className="dash-stat-card">
                <span className="stat-value">{progress.length}</span>
                <span className="stat-label">Enrolled Courses</span>
              </div>
              <div className="dash-stat-card">
                <span className="stat-value">{completed.length}</span>
                <span className="stat-label">Completed</span>
              </div>
              <div className="dash-stat-card">
                <span className="stat-value">{inProgress.length}</span>
                <span className="stat-label">In Progress</span>
              </div>
              <div className="dash-stat-card">
                <span className="stat-value">{completed.length}</span>
                <span className="stat-label">Certificates Earned</span>
              </div>
            </div>
          </section>
        )}

        {activeTab === "all-courses" && (
          <section>
            <h1>All Courses</h1>
            <p className="dash-subtitle">Browse HGRTC's training programs and enroll.</p>
            <div className="dash-course-grid">
              {courses.map((c) => {
                const enrolled = progress.find((p) => p.courseId === c.id);
                return (
                  <div className="dash-course-card" key={c.id}>
                    <h3>{c.title}</h3>
                    <div className="dash-course-meta">{c.duration} · {c.mode}</div>
                    <div className="dash-course-price">{c.price}</div>
                    <button
                      className={enrolled ? "dash-btn-disabled" : "dash-btn-primary"}
                      disabled={!!enrolled}
                      onClick={() => enroll(c.id)}
                    >
                      {enrolled ? "Enrolled" : "Enroll Now"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {activeTab === "my-courses" && (
          <section>
            <h1>Your Courses</h1>
            <p className="dash-subtitle">Track progress and download certificates for completed courses.</p>

            <h4 className="dash-group-label">Completed</h4>
            {completed.length === 0 && <p className="dash-empty">No completed courses yet.</p>}
            <div className="dash-mycourse-list">
              {completed.map((p) => {
                const course = courseById(p.courseId);
                if (!course) return null;
                return (
                  <div className="dash-mycourse-row" key={p.courseId}>
                    <div>
                      <div className="dash-mycourse-title"><FaCircleCheck className="check-icon" /> {course.title}</div>
                      <div className="dash-mycourse-meta">Completed on {p.completedOn}</div>
                    </div>
                    <button
                      className="dash-btn-secondary"
                      onClick={() => downloadCertificate({
                        studentName: user?.name || "Student",
                        courseTitle: course.title,
                        date: p.completedOn,
                      })}
                    >
                      <FaDownload /> Certificate
                    </button>
                  </div>
                );
              })}
            </div>

            <h4 className="dash-group-label">In Progress</h4>
            {inProgress.length === 0 && <p className="dash-empty">Nothing in progress right now.</p>}
            <div className="dash-mycourse-list">
              {inProgress.map((p) => {
                const course = courseById(p.courseId);
                if (!course) return null;
                return (
                  <div className="dash-mycourse-row" key={p.courseId}>
                    <div style={{ flex: 1 }}>
                      <div className="dash-mycourse-title">{course.title}</div>
                      <div className="dash-progress-bar">
                        <div className="dash-progress-fill" style={{ width: `${p.progress}%` }}></div>
                      </div>
                    </div>
                    <span className="dash-progress-percent">{p.progress}%</span>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {activeTab === "profile" && (
          <section>
            <h1>Profile</h1>
            <p className="dash-subtitle">Your account details.</p>
            <div className="dash-profile-card">
              <div className="dash-field"><label>Full Name</label><div>{user?.name}</div></div>
              <div className="dash-field"><label>Email</label><div>{user?.email}</div></div>
              <div className="dash-field"><label>Phone</label><div>Not provided yet</div></div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default StudentDashboard;