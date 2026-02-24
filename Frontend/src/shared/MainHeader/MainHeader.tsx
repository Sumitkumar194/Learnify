import { useEffect, useState } from "react";
import "./MainHeader.scss";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="main-header flex align-center flex-row items-center justify-between">
      <div className="left-container flex flex-row items-center gap-10 ">
        <div className="logo ">
          <img src="/src/assets/one.png" alt="Learnify Logo" />
        </div>
        <div className="input-container border-2 flex focus:border-amber-100 pt-2 pb-2 pl-4 items-center gap-1 rounded-4xl border-[#44CEE6] bg-[#9fe3f11f]">
          <img
            src="/src/assets/icons/SearchIcon.svg"
            alt="Search Icon"
            className="search-icon"
          />
          <input
            className="search-input outline-none"
            type="text"
            placeholder="Search For Course"
          />
          {/* <button className="category-button text-bold text-[#0f0f0f] cursor-pointer">
            Category{" "}
            <img
              className="opacity-80"
              src="/src/assets/icons/DownArrowSvg.svg"
              alt="downArrow"
            />
          </button> */}
        </div>
      </div>
      <div className="right-container bg-blend-lighten">
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
        <ul
          className={`menu-list gap-10 cursor-pointer text-[#0f0f0f] text-bold ${
            isMenuOpen ? "menu-open" : ""
          }`}
        >
          <li className="">
            Explore{" "}
            <img
              className="opacity-80"
              src="/src/assets/icons/DownArrowSvg.svg"
              alt="downArrow"
            />
          </li>
          <li>
            My Courses
            <img
              className="my-courses-icon"
              src="/src/assets/icons/Books.svg"
              alt="ManProfile"
            />
          </li>
          {/* <li>Plans & Pricing</li> */}
          <li>
            Wishlist
            <img
              className="wishlist-icon"
              src="/src/assets/icons/Heart.svg"
              alt="Heart Icon"
            />
          </li>
          <li>
            Cart{" "}
            <img
              className="cart-icon"
              src="/src/assets/icons/BlackCart.svg"
              alt="Cart Icon"
            />
          </li>
          <li>
            Profile{" "}
            <img
              className="opacity-80 profile-icon"
              src="/src/assets/icons/ManProfile.svg"
              alt="ManProfile"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
