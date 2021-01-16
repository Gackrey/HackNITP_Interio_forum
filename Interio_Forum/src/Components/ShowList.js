import React from "react";
import { ProfileButton } from "./ButtonsLinks";

function ShowList({ id, name, avatar_url }) {
  //   console.log("this is from showlist", id, login, avatar_url);
  return (
    <>
      <div className="card-column m-2">
        <div className="card-image-top">
          <img
            src={avatar_url}
            alt=""
            // className="img-fluid"
            style={{ width: "210px",height:"200px" }}
          />
        </div>
        <div className="card-title text-center">{name}</div>
        <ProfileButton id={id} />
      </div>
    </>
  );
}

export default ShowList;
