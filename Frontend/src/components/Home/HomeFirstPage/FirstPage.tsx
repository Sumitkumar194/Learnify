import './FirstPage.style.scss';
import heroImage from "../../../assets/icons/heroImage.png";

const FirstPage = () => {
  return (
    <section className="home-hero">
      <div className="main-container">
        <div className="left-container">
          <h1>Learn without limits</h1>
          <p>
            Start, switch, or advance your career with more than 7,000 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>

          <div className="checks">
            <div className="check-item">
              <span className="check-mark">✓</span>
              <p><strong>Expert instruction:</strong> Learn from industry leaders and experienced practitioners</p>
            </div>
            <div className="check-item">
              <span className="check-mark">✓</span>
              <p><strong>Flexible learning:</strong> Study at your own pace, on any device, anytime</p>
            </div>
            <div className="check-item">
              <span className="check-mark">✓</span>
              <p><strong>Career advancement:</strong> Earn certificates and credentials to boost your resume</p>
            </div>
          </div>

          <div className="cta-row">
            <button type="button" className="primary-cta">Join for Free</button>
            <button type="button" className="secondary-cta">Try Learnify Business</button>
          </div>
        </div>

        <div className="right-container">
          <img src={heroImage} alt="Student learning at home" className="hero-image" />
          <div className="profile-card">
            <div className="play-btn">▶</div>
            <div className="profile-content">
              <h3>Sarah Johnson</h3>
              <p>Completed 12 courses</p>
              <div className="certificates">
                <span className="dot blue"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="cert-count">+5 certificates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstPage;
