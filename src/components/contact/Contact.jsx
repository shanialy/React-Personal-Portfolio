import "./Contact.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import cogoToast from 'cogo-toast';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n5co7ob",
        "template_i953bpq",
        formRef.current,
        "60PgsgCuCud7AVrC_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
            cogoToast.error('There occured an errorr' ,{
              position : "top-center"
            });
        }
      );

      if(done){
        cogoToast.success('You have successfully sent an email to samiullahtariqbutt@gmail.com' ,{
          position : "top-center"
        }) 
      }

  };

  return (
    <div className="container-fluid c mt-3">
      <div className="c-bg d-none d-lg-block"></div>
      <div className="row">
        <div className="col-md-6">
          <h1 className="c-title">Let's discuss your project</h1>
          <div>
          <div className="c-info-container">
            <div className="c-info-item">
              <img src="/Images/phone.png" alt="" className="c-icon" />
              +92 3114816018
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="/Images/email.png" alt="" />
              samiullahtariqbutt@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="/Images/address.png" alt="" />
              GULBAHAR COLONY STREET NO 1. LAHORE CANTT
            </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <p className="c-desc mt-4">
            <b style={{fontWeight : "bolder" ,fontSize : "17px"}}>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
          <div className="row" >
         
            <div className="col-md-6">
            <input style={{backgroundColor: darkMode && "white" }} type="text" placeholder="Name" name="user_name" />
             <div className="row">
               <div className="col">
               <input style={{backgroundColor: darkMode && "white"}} type="text" placeholder="Email" name="user_email" />
               </div>
             </div>
            </div>
           <div className="col-md-6">
           <input style={{backgroundColor: darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
           </div>
           
          
            
          
          </div>
          <div className="row">
            <div className="col">
            <textarea style={{backgroundColor: darkMode && "white" }} rows="5" placeholder="Message" name="message" />         
            </div>

            <div className="row">
            <div className="col"></div>
            <div className="col">
            <button className="btn" style={{backgroundColor : " #7675d4" , color : "white"}}>Submit</button>

            
                          </div>
           
<div className="col"></div>

            </div>
           
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
