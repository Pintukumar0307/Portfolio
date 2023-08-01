import emailjs from "emailjs-com";
import React from "react";
import Swal from "sweetalert2";
import "./Contact.css";

function Contact() {

  function sendEmail(e) {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_xurwa0b",
        "template_3gpgjkj",
        e.target,
        "Y2fvH5wGHE--Q4o98"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );

    e.target.reset();
  }

  return (
    <>
      <div className="mainContact " id="contact">
        <div className="contact">
          <h1 className="contactus">Contact Me</h1>

          <div className="container">
            <div className="row">
              <div className="column">
                <form onSubmit={sendEmail}>
                  <label for="name"> Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name.."
                  />

                  <label for="email"> Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />

                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="subject"
                  />

                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write something.."></textarea>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>

          {/* <h4 className='mail'>Email:---pintu03072002@gmail.com</h4>
                <h4 className="linkedin">Linkedin:---<a href="https://www.linkedin.com/in/pintu-kumar-092a1120b"  target="blank" style={{color : 'yellow'}}>link</a></h4>
                 */}
        </div>
      </div>
    </>
  );
}

export default Contact;
