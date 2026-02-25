import "./Signup.scss";
import { useNavigate } from "react-router-dom";
import signupHeroImage from "../../../assets/images/auth/signup-hero.png";
import educationCapIcon from "../../../assets/icons/education-cap.svg";
import googleIcon from "../../../assets/icons/google.svg";
import React from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [signupData, setSignupData] = React.useState({
    name: "",
    email: "",
    password: "",
    agreeToPolicy: false,
  });
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    password: "",
    agreeToPolicy: "",
  });
  const [isSubmitPressed, setIsSubmitPressed] = React.useState(false);

  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    const field = id as keyof typeof signupData;

    setSignupData((prevData) => ({
      ...prevData,
      [field]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async () => {
    const nextErrors = {
      name: "",
      email: "",
      password: "",
      agreeToPolicy: "",
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedName = signupData.name.trim();
    const trimmedEmail = signupData.email.trim();
    const trimmedPassword = signupData.password.trim();

    if (!trimmedName) nextErrors.name = "Name is required";
    if (!emailRegex.test(trimmedEmail))
      nextErrors.email = "Please enter a valid email";
    if (trimmedPassword.length < 8)
      nextErrors.password = "Password must be at least 8 characters";
    if (!signupData.agreeToPolicy)
      nextErrors.agreeToPolicy = "You must agree to continue";

    setErrors(nextErrors);

    const isValid = Object.values(nextErrors).every((value) => value === "");
    if (!isValid) return;

    setIsSubmitPressed(true);
    setTimeout(() => setIsSubmitPressed(false), 180);

    try {
      const res = await axios.post("http://localhost:8000/api/signup", {
        name: trimmedName,
        email: trimmedEmail,
        password: trimmedPassword,
      });
      console.log("Signup successful:", res.data);
      setSignupData({
        name: "",
        email: "",
        password: "",
        agreeToPolicy: false,
      });
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  return (
    <section className="signup-page">
      <div className="signup-left">
        <div className="signup-image-wrap">
          <img
            src={signupHeroImage}
            alt="Learning experience"
            className="hero-image"
          />
          <div className="certificate-chip">
            <span className="chip-icon" aria-hidden="true">
              +
            </span>
            <div>
              <h4>Certificate Earned!</h4>
              <p>Web Development</p>
            </div>
          </div>
        </div>

        <div className="left-copy">
          <h1>Start Your Journey!</h1>
          <p>
            Join millions of learners worldwide and unlock your potential with
            expert-led courses
          </p>

          <ul className="feature-list">
            <li>
              <span className="check" aria-hidden="true">
                +
              </span>
              Access to 210K+ courses
            </li>
            <li>
              <span className="check" aria-hidden="true">
                +
              </span>
              Learn from 75K+ expert instructors
            </li>
            <li>
              <span className="check" aria-hidden="true">
                +
              </span>
              Earn certificates to boost your career
            </li>
          </ul>
        </div>
      </div>

      <div className="signup-right">
        <div className="signup-form-wrap">
          <div className="brand-row">
            <img src={educationCapIcon} alt="" aria-hidden="true" />
            <span>Learnify</span>
          </div>

          <h2>Create your account</h2>
          <p className="sub-copy">
            Start learning today. It's free to sign up.
          </p>

          <button type="button" className="google-btn">
            <img src={googleIcon} alt="" aria-hidden="true" />
            <span>Sign up with Google</span>
          </button>

          <div className="separator">
            <span>Or sign up with email</span>
          </div>

          <div className={`field-group ${errors.name ? "field-group-error" : ""}`}>
            <label htmlFor="name">Full Name</label>
            <div className={`input-wrap ${errors.name ? "input-wrap-error" : ""}`}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle
                  cx="12"
                  cy="8"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M5 19C5 15.7 7.7 13 11 13H13C16.3 13 19 15.7 19 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                value={signupData.name}
                onChange={handleInputchange}
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            {errors.name && <strong className="error-text">{errors.name}</strong>}
          </div>

          <div className={`field-group ${errors.email ? "field-group-error" : ""}`}>
            <label htmlFor="email">Email</label>
            <div className={`input-wrap ${errors.email ? "input-wrap-error" : ""}`}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M4 7L12 13L20 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                value={signupData.email}
                onChange={handleInputchange}
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && <strong className="error-text">{errors.email}</strong>}
          </div>

          <div className={`field-group password-group ${errors.password ? "field-group-error" : ""}`}>
            <label htmlFor="password">Password</label>
            <div className={`input-wrap ${errors.password ? "input-wrap-error" : ""}`}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect
                  x="5"
                  y="10"
                  width="14"
                  height="10"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 10V7.8C8 5.7 9.8 4 12 4C14.2 4 16 5.7 16 7.8V10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <input
                value={signupData.password}
                onChange={handleInputchange}
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
              />
              <button
                type="button"
                className="icon-btn"
                aria-label="Show password"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M2 12C3.8 8.7 7.1 6.5 12 6.5C16.9 6.5 20.2 8.7 22 12C20.2 15.3 16.9 17.5 12 17.5C7.1 17.5 3.8 15.3 2 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            {errors.password ? (
              <strong className="error-text">{errors.password}</strong>
            ) : (
              <p className="hint">Must be at least 8 characters</p>
            )}
          </div>

          <label className={`policy-row ${errors.agreeToPolicy ? "policy-row-error" : ""}`}>
            <input
              id="agreeToPolicy"
              name="agreeToPolicy"
              type="checkbox"
              checked={signupData.agreeToPolicy}
              onChange={handleInputchange}
            />
            <span>
              I agree to the{" "}
              <button type="button" className="text-link">
                Terms
              </button>{" "}
              and{" "}
              <button type="button" className="text-link">
                Privacy Policy
              </button>
            </span>
          </label>
          {errors.agreeToPolicy && (
            <strong className="error-text policy-error-text">
              {errors.agreeToPolicy}
            </strong>
          )}

          <button
            type="button"
            className={`signup-btn ${isSubmitPressed ? "signup-btn-pressed" : ""}`}
            onClick={handleSubmit}
          >
            <span>Create Account</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <p className="login-copy">
            Already have an account?{" "}
            <button
              type="button"
              className="text-link"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
