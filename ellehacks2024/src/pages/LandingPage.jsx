import group2 from "../assets/group2.svg";

function LandingPage() {
  return (
    <div className="landingpage-container">
      <div className="title-container">
        <div className="main-title-container">
          <img src={group2} alt="Logo" className="logo" />
          <p className="main-title">Open Arms</p>
        </div>
        <p className="slogan">Your companion in healing.</p>
      </div>
    </div>
  );
}

export default LandingPage;
