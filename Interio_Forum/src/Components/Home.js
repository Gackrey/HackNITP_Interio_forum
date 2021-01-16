import React, { useState } from "react";
import { ConsultButton, TemplateButton } from "./ButtonsLinks";
import DesignerList from "./DesignerList";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <SearchBar />
        <div className="main ">
          <div className="row dark-overlay">
            <div className="col offset-1 d-flex flex-column my-5">
              <h1 className="display-4 text-white d-none d-sm-block">
                Fursnish Your Homes
              </h1>
              <p className="lead text-white d-none d-md-block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, incidunt? Consectetur aspernatur dolorem aliquam
                ratione labore at sunt ab sed?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quam, ab.
              </p>
              <span>
                <TemplateButton />
              </span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="display-4 text-center my-2">
            Consult the Best Designers
          </h1>
          <DesignerList addClass={"overflow-hidden d-flex container"} />
        </div>
        <div className="d-block text-center my-2">
          <ConsultButton />
        </div>
        <div className="template-section my-4">
          <div className="dark-overlay">
            <div className="col offset-1 d-flex flex-column my-5">
              <h1 className="display-4 text-white d-none d-sm-block">
                Browse for the Best Templates
              </h1>
              <p className="lead text-white d-none d-md-block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, incidunt? Consectetur aspernatur dolorem aliquam
                ratione labore at sunt ab sed?
              </p>
              <span className="d-block ">
                <TemplateButton />
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
