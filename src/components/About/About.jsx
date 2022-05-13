import "./about.css";

const About = () => {
  return (
  <div className="container mt-3">
      <div className="row">
        <div className="col-md-6" style={{position : "relative"}}>
        <div className="a-card bg"   style={{borderRadius : "75px"}}></div>
        <div className="a-card">
          <img
            src="/Images/img.jpg"
            alt=""
            className="img-fluid imgStyling"
            style={{borderRadius : "75px"}}
          />
        </div>
        
        </div>
      
      <div className="col-md-6">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="row">
          <div className="col-lg-3 col-md-2 d-none d-lg-block">
          <img src="/Images/award.png" alt="" className="img-fluid awardImg" style={{borderRadius : "20px"}} />
          </div>
          <div className="col">
          <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-p">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>

      </div>
    </div> 
  );
};

export default About;
