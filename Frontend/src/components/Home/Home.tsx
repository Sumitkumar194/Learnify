import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import FirstPage from "./HomeFirstPage/FirstPage";
import Courses from "./Courses/Courses";
import "./Home.style.scss";
import SkillsShowCase from "../../shared/SkillsShowCase/SkillsShowCase";

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

function Home() {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
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
      }
    };

    fetchProfile();
  }, []);

  const firstName = useMemo(
    () => userData?.name?.trim().split(" ")[0] || "User",
    [userData?.name],
  );
  const initials = useMemo(() => {
    const parts = userData?.name?.trim().split(" ").filter(Boolean) || [];
    if (parts.length === 0) {
      return "U";
    }
    if (parts.length === 1) {
      return parts[0][0].toUpperCase();
    }
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }, [userData?.name]);

  return (
    <>
      <section className="home-welcome-strip">
        <div className="welcome-avatar">{initials}</div>
        <div className="welcome-copy">
          <h2>Welcome back, {firstName}</h2>
          <button type="button" className="welcome-link">
            Add occupation and interests
          </button>
        </div>
      </section>
      <FirstPage />
      <SkillsShowCase />
      <Courses />
    </>
  );
}

export default Home;
