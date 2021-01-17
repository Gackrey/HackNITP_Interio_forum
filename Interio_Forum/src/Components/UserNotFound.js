import React from "react";
import DesignerList from "./DesignerList";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function UserNotFound() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="container">
        <h1 className="display-4">No Such Profile Found !</h1>
      </div>
      <hr className=" bg-secondary" />
      <div className="container text-center display-4">
        Check Out from the Best
      </div>
      <DesignerList addClass={"d-flex flex-wrap container"} />
    </div>
  );
}

export default UserNotFound;
