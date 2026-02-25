import { useCallback, useEffect, useState } from "react";
import "./MainHeader.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "student" | "instructor" | "admin";
  createdAt: string;
  updatedAt: string;
}

interface ProfileResponse {
  user: User;
}

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(
    () => localStorage.getItem("authToken"),
  );
  const [userData, setUserData] = useState<User | null>(null);

  const isLoggedIn = Boolean(authToken);
  const navigate = useNavigate();

  const syncAuthState = useCallback(() => {
    const token = localStorage.getItem("authToken");
    setAuthToken(token);
  }, []);

  useEffect(() => {
    if (!authToken) {
      setUserData(null);
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get<ProfileResponse>(
          "http://localhost:8000/api/profile",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          },
        );
        setUserData(res.data.user);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        localStorage.removeItem("authToken");
        setAuthToken(null);
        setUserData(null);
      }
    };

    fetchProfile();
  }, [authToken]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("storage", syncAuthState);
    window.addEventListener("auth-token-updated", syncAuthState);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("storage", syncAuthState);
      window.removeEventListener("auth-token-updated", syncAuthState);
    };
  }, [syncAuthState]);

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <header className="main-header">
      <div className="left-container">
        <div className="logo">
          <img
            src="/src/assets/one.png"
            alt="Learnify Logo"
            onClick={() => navigate("/dashboard")}
          />
        </div>

        <button type="button" className="category-button">
          <img src="/src/assets/icons/MenuIcon.svg" alt="" aria-hidden="true" />
          <span>Categories</span>
        </button>

        <div className="search-container">
          <img
            src="/src/assets/icons/SearchIcon.svg"
            alt="Search Icon"
            className="search-icon"
          />
          <input
            className="search-input"
            type="text"
            placeholder="Search for anything"
          />
        </div>
      </div>

      <div className="right-container">
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span>Menu</span>
          <img src="/src/assets/icons/MenuIcon.svg" alt="Menu icon" />
        </button>

        <ul className={`menu-list ${isMenuOpen ? "menu-open" : ""}`}>
          <li className="menu-link">Teach on Learnify</li>
          <li className="menu-link">My Learning</li>
          <li className="icon-link cart-link">
            <img
              src="/src/assets/icons/BlackCart.svg"
              alt="Cart"
              className="cart-icon"
            />
            <span className="cart-count">2</span>
          </li>
          <li className="icon-link bell-link" aria-label="Notifications">
            <img
              src="/src/assets/icons/bell.svg"
              alt="bell"
              className="bell-icon"
            />
            <span className="bell-dot" aria-hidden="true"></span>
          </li>

          {isLoggedIn && (
            <li>
              <button
                type="button"
                className="profile-button"
                onClick={() => navigate("/dashboard")}
              >
                <img
                  src="/src/assets/icons/ManProfile.svg"
                  alt="Profile"
                  className="profile-icon"
                />
                <span className="profile-name">{userData?.name || "Profile"}</span>
              </button>
            </li>
          )}

          {!isLoggedIn && (
            <>
              <li>
                <button
                  type="button"
                  onClick={goToLogin}
                  className="auth-button login-button"
                >
                  Log in
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={goToSignup}
                  className="auth-button signup-button"
                >
                  Sign up
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
