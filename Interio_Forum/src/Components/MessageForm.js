import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
function MessageForm() {
  console.log(useParams());

  return (
    <section>
      <Navbar />
      <div className="row">
        <div className="col-6 offset-3">
          <div className="display-4 text-center">Your Message</div>
          <form className="form">
            <div className="form-group">
              <label htmlFor="name">Name :</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message :</label>
              <input type="text" className="form-control" />
            </div>
            <button className="btn btn-block btn-outline-info">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MessageForm;
