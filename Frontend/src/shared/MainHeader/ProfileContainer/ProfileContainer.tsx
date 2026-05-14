import React from "react";
import LoaderOverlay from "../../LoaderOverlay/LoaderOverlay";
import type { User } from "../MainHeader";
import "./ProfileContainer.scss";

function ProfileContainer({ userData }: { userData: User }) {
  const names = userData.name.split(" ");
  const initials =
    names[0][0].toUpperCase() +
    (names[names.length - 1][0].toUpperCase() || "");
  const [loader, setLoader] = React.useState(false);

  const LogOutUser = () => {
    setLoader(true);
    setTimeout(() => {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
      setLoader(false);
    }, 1000);
  };
  return (
    <>
      <LoaderOverlay isOpen={loader} message="Logging Out ............" />
      <div className="profile-dropdown">
        <div className="profile-dropdown__header">
          <div className="profile-dropdown__avatar">{initials}</div>
          <div className="profile-dropdown__user">
            <p className="profile-dropdown__name">{userData.name ?? "User"}</p>
            <p className="profile-dropdown__email">
              {userData.email ?? "Email not available"}
            </p>
          </div>
        </div>

        <div className="profile-dropdown__section">
          <button type="button" className="profile-dropdown__item">
            My learning
          </button>
          <button type="button" className="profile-dropdown__item">
            My cart
          </button>
          <button type="button" className="profile-dropdown__item">
            Wishlist
          </button>
          <button type="button" className="profile-dropdown__item">
            Refer a friend
          </button>
          <button type="button" className="profile-dropdown__item">
            Instructor dashboard
          </button>
        </div>

        <div className="profile-dropdown__section">
          <button type="button" className="profile-dropdown__item with-badge">
            <span>Notifications</span>
            <span className="count-badge">2</span>
          </button>
          <button type="button" className="profile-dropdown__item with-badge">
            <span>Messages</span>
            <span className="count-badge">2</span>
          </button>
        </div>

        <div className="profile-dropdown__section">
          <button type="button" className="profile-dropdown__item">
            Account settings
          </button>
          <button type="button" className="profile-dropdown__item">
            Payment methods
          </button>
          <button type="button" className="profile-dropdown__item">
            Subscriptions
          </button>
          <button type="button" className="profile-dropdown__item">
            Learnify credits
          </button>
          <button type="button" className="profile-dropdown__item">
            Purchase history
          </button>
        </div>

        <div className="profile-dropdown__section">
          <button
            type="button"
            className="profile-dropdown__item language-item"
          >
            <span>Language</span>
            <span className="language-value">English (Global)</span>
          </button>
        </div>

        <div className="profile-dropdown__section">
          <button type="button" className="profile-dropdown__item">
            Public profile
          </button>
          <button type="button" className="profile-dropdown__item">
            Edit profile
          </button>
        </div>

        <div className="profile-dropdown__section">
          <button type="button" className="profile-dropdown__item">
            Help and Support
          </button>
          <button
            type="button"
            onClick={LogOutUser}
            className="profile-dropdown__item"
          >
            Log out
          </button>
        </div>

        <div className="profile-dropdown__footer">
          <button type="button" className="profile-dropdown__business">
            <div>
              <p className="business-title">Learnify Business</p>
              <p className="business-subtitle">
                Bring learning to your company
              </p>
            </div>
            <span className="business-icon">-&gt;</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileContainer;
