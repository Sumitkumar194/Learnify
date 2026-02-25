import "./Login.scss";
import { useNavigate } from "react-router-dom";
import loginHeroImage from "../../../assets/images/auth/login-hero.png";
import educationCapIcon from "../../../assets/icons/education-cap.svg";
import googleIcon from "../../../assets/icons/google.svg";
import React from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(false);
  const [isSubmitPressed, setIsSubmitPressed] = React.useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (id === "email" && value.trim() !== "") {
      if (!emailRegex.test(value)) {
        setError(true);
      } else {
        setError(false);
      }
    }
    setLoginForm((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(loginForm.email.trim());
    const hasPassword = loginForm.password.trim() !== "";

    setError(!isEmailValid);

    if (isEmailValid && hasPassword) {
      setIsSubmitPressed(true);
      setTimeout(() => setIsSubmitPressed(false), 180);
    }

    const res = axios.post("http://localhost:8000/api/login", loginForm)
      .then((response) => {
        console.log("Login successful:", response.data);

        const { token } = response.data;
        localStorage.setItem("authToken", token);
        window.dispatchEvent(new Event("auth-token-updated"));
        navigate("/dashboard");
        // Handle successful login, e.g., store token, redirect, etc.
      })
      .catch((error) => {
        console.error("Login failed:", error.response?.data || error.message);
        // Handle login failure, e.g., show error message to user
      });

    console.log(res);
  };

  return (
    <section className="login-page">
      <div className="login-left">
        <div className="left-image-wrap">
          <img src={loginHeroImage} alt="Online class session" />
          <div className="students-card">
            <div className="card-icon">
              <img src={educationCapIcon} alt="" aria-hidden="true" />
            </div>
            <div>
              <h4>65M+ Students</h4>
              <p>Join the community</p>
            </div>
          </div>
        </div>

        <div className="welcome-copy">
          <h1>Welcome Back!</h1>
          <p>
            Continue your learning journey and achieve your goals with Learnify
          </p>
          <div className="stats-row">
            <div>
              <h3>210K+</h3>
              <span>Courses</span>
            </div>
            <div className="divider"></div>
            <div>
              <h3>75K+</h3>
              <span>Instructors</span>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-form-wrap">
          <div className="brand-row">
            <img src={educationCapIcon} alt="" aria-hidden="true" />
            <span>Learnify</span>
          </div>

          <h2>Log in to your account</h2>
          <p className="sub-copy">Welcome back! Please enter your details.</p>

          <button type="button" className="google-btn">
            <img src={googleIcon} alt="" aria-hidden="true" />
            <span>Continue with Google</span>
          </button>

          <div className="separator">
            <span>Or continue with email</span>
          </div>

          <div className={`field-group ${error ? "field-group-error" : ""}`}>
            <label htmlFor="email">Email</label>
            <div className={`input-wrap ${error ? "input-wrap-error" : ""}`}>
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
                onChange={handleInput}
                id="email"
                type="email"
                placeholder="Enter your email"
                value={loginForm.email}
              />
            </div>
            {error && (
              <strong className="error-text">
                Please enter a valid email address
              </strong>
            )}
          </div>

          <div className="field-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrap">
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
                id="password"
                onChange={handleInput}
                type="password"
                placeholder="Enter your password"
                value={loginForm.password}
              />
            </div>
          </div>

          <div className="options-row">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <button type="button" className="text-link">
              Forgot password?
            </button>
          </div>

          <button
            onClick={onSubmit}
            type="button"
            className={`login-btn ${isSubmitPressed ? "login-btn-pressed" : ""}`}
          >
            <span>Log In</span>
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

          <p className="signup-copy">
            {"Don't have an account? "}
            <button
              type="button"
              className="text-link signup-link"
              onClick={() => navigate("/signup")}
            >
              Sign up for free
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
