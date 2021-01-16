import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { Link, useParams } from "react-router-dom";
function SearchButton(props) {
  console.log(props);
  return (
    <button
      className="btn btn-info mx-2"
      onClick={() => console.log("clicked")}
    >
      <AiOutlineSearch />
    </button>
  );
}
export const SearchByLocation = () => {
  const successCallback = (position) => {
    console.log(position);
  };
  const errorCallback = () => {};

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };
  return (
    <button className="btn-info btn mx-2" onClick={handleClick}>
      <VscLocation />
    </button>
  );
};

export const TemplateButton = () => {
  return (
    <Link to="/template" className="btn btn-info btn-lg">
      Learn More
    </Link>
  );
};

export const ProfileButton = ({ id }) => {
  return (
    <Link to={`/${id}`} className="btn btn-info">
      View Profile
    </Link>
  );
};

export const MessageButton = ({ id }) => {
  return (
    <Link to={`/${id}/message`} className="btn btn-info">
      Send Message
    </Link>
  );
};

export const ConsultButton = () => {
  return (
    <Link to="/consult" className="btn btn-outline-dark">
      See More
    </Link>
  );
};

export default SearchButton;
