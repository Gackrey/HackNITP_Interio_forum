import React from "react";
import emailjs from 'emailjs-com';
import Navbar from "./Navbar";
function MessageForm() {

  function sendemail(e){
    e.preventDefault();
    emailjs.sendForm('service_r9wfoe8', 'template_41vhwpt', e.target, 'user_4a4ogGzspOsZZSaRJ8z2A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  function alertmsg(){
    let msgarea = document.getElementById('msg');
    msgarea.innerHTML+=`
    <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!!!</strong> Your request is sent to your favorite designer.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;

    setTimeout(() => {
      msgarea.innerHTML='';
    }, 3000);
  }
  return (
    <section>
      <Navbar />
      <div id="msg"></div>
      <div className="row">
        <div className="col-6 offset-3">
          <div className="display-4 text-center">Your Message</div>
          <form onSubmit = {sendemail}>
            <div className="form-group">
              <label htmlFor="name">Name :</label>
              <input type="text" className="form-control" name="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input type="email" className="form-control" name="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message :</label>
              <input type="text" className="form-control" name="message"/>
            </div>
            <div className = "col-8 pt-3 mx-auto">
              <input type="Submit" onClick={alertmsg} className="btn btn-primary" value="Send Message"></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MessageForm;
