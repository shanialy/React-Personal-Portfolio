import "./about.css";
import Award from "../../img/award.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://img.freepik.com/free-photo/hacker-with-laptop_23-2147985335.jpg?size=626&ext=jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Me Ahsan Chaudhry a computer science gradute from University of Sindh
          . Working on a best technology MERN stack and providing best services
          , also i am able to scrape the websites using python.
        </p>
        <div className="a-award">
         
          <div className="a-award-texts">
            <h4 className="a-award-title">Cisco Verified Python Developer</h4>
            <p className="a-award-desc">A cirtification from Cisco</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
