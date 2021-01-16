import React from "react";
import DesignerList from "./DesignerList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
function ConsultPage() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <div className="consult-hero">
        <div className="dark-overlay">
          <div className="row">
            <div className="col-8 offset-2 my-4">
              <h1 className="display-4 text-white">
                Consult from the Best Designers !
              </h1>
              <button className="btn btn-danger btn-lg ">
                Book An Appointment Now.
              </button>
            </div>
          </div>
        </div>
      </div>
      <DesignerList addClass={"d-flex container flex-wrap"} />
      <Footer />
    </>
  );
}

export default ConsultPage;
