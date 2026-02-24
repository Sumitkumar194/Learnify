import './FirstPage.style.scss';

const FirstPage = () => {
  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <h2>Learn without limits</h2>
          <p>
            Unlock your potential with our online learning platform. Access a
            wide range of courses, expert instructors, and interactive content
            to learn anytime, anywhere. Join our community of learners and start
            your educational journey today!
          </p>

          <div className="checks">
            <h3>
              <img src="/src/assets/icons/GreenSucces.svg" alt="Checkmark" />{" "}
              <span>Expert intrunction</span> learn from industry leaders and
              experienced practitioners
            </h3>
            <h3>
              <img src="/src/assets/icons/GreenSucces.svg" alt="Checkmark" />{" "}
              <span>Flexible learning:</span> Study at your own pace, on any
              device, anytime
            </h3>
            <h3>
              <img src="/src/assets/icons/GreenSucces.svg" alt="Checkmark" />{" "}
              <span> Career advancement:</span> Earn certificates and
              credentials to boost your resume
            </h3>
          </div>
        </div>
        <div className="right-container"></div>
      </div>
    </>
  );
};

export default FirstPage;
