import "./Home.css"
import React from "react";

const Home = () => {
  return (
       <div className="showcase">
       <div className="overlay">
           <div className="container">
              <div className="landing">
                      <div className="landing-content animate__animated animate__bounce">
                        <h2 className="sm-heading"><span>My Name is</span></h2>
                        <h2 className="lg-heading">
                          <span className="text-primary ">Samiullah Tariq Butt</span>
                        </h2>
                        <div className="i-title">
                                <div className="i-title-wrapper">
                                <div className="i-title-item">Web Developer</div>
                                <div className="i-title-item">UI/UX Designer</div>
                                <div className="i-title-item">Student</div>
                                <div className="i-title-item">Quick Learner</div>
                                </div>
                         </div>
                            <p style={{marginTop : "30px" , color :"#5b83f1"}}>
                                I design and develop services for customers of all sizes,
                                specializing <br className="d-none d-md-block"/> in creating stylish, modern websites, web services.
                            </p>
                      </div>
                    </div>
                    </div>
            
         
          </div>
          </div>   
  )
};

export default Home;
