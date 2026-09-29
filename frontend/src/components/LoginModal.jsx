import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaXmark, FaEye, FaEyeSlash, FaFacebookF, FaXTwitter, FaGoogle, FaLinkedinIn, FaPinterestP } from 'react-icons/fa6';
import logo from '../assets/images/logo.png';
import { useAuth } from '../context/AuthContext';
import './LoginModal.css';

function ParticleField() {
  const [dots] = useState(() =>
    Array.from({ length: 55 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 180 + Math.random() * 650;
      return {
        id: i,
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
        size: 1 + Math.random() * 2.2,
      };
    })
  );

  return (
    <div className="particle-field">
      {dots.map((d) => (
        <span
          key={d.id}
          className="particle-dot"
          style={{
            width: `${d.size}px`,
            height: `${d.size}px`,
            '--tx': `${d.tx}px`,
            '--ty': `${d.ty}px`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function LoginModal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    login(email);
    onClose();
    navigate('/dashboard');
  }

  return (
    <div className="login-overlay" onClick={onClose}>
      <ParticleField />

      <div className="login-card" onClick={(e) => e.stopPropagation()}>
        <button className="login-close" onClick={onClose}><FaXmark /></button>

        <div className="login-brand">
          <img src={logo} alt="HGRTC logo" />
          <span>HGRTC</span>
        </div>

        <h2>Login into your account</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input type="tel" placeholder="Mobile Number" required />
          <div className="login-password-field">
            <input type={showPassword ? "text" : "password"} placeholder="Password" required />
            <button type="button" className="login-eye" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="login-row">
            <label className="login-checkbox">
              <input type="checkbox" />
              Keep me logged in
            </label>
            <a href="#" className="login-forgot">Forgot Password</a>
          </div>

          <button type="submit" className="login-submit">Log in</button>
        </form>

        <div className="login-divider"><span>Or Login With</span></div>

        <div className="login-socials">
          <a href="#" className="social facebook"><FaFacebookF /></a>
          <a href="#" className="social twitter"><FaXTwitter /></a>
          <a href="#" className="social google"><FaGoogle /></a>
          <a href="#" className="social linkedin"><FaLinkedinIn /></a>
          <a href="#" className="social pinterest"><FaPinterestP /></a>
        </div>

        <p className="login-register">
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;