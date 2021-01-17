import React from "react";
import { Link } from "react-router-dom";

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
