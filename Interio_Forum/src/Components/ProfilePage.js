import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MessageButton } from "./ButtonsLinks";

import Navbar from "./Navbar";
const url = "/api/designers";
function ProfilePage() {
  const { id } = useParams();
  console.log(id);
  const [profile, setProfile] = useState({});
  const getData = async () => {
    const response = await fetch(`/api/designers/${id}`);
    const data = await response.json();
    console.log("this is profile", data);
    setProfile(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="card d-flex flex-row">
          <div className="card-image-top ">
            <img
              src={profile.avatar_url}
              style={{ width: "300px" }}
              className="image-fluid "
            />
          </div>
          <div className="mx-2">
            <div className="card-title ">
              <h1 className="h1">{profile.Name}</h1>
            </div>
            <div className="card-body">
              <h1 className="h3">Followers :{profile.Followers}</h1>
              <h1 className="h3">Followers :{profile.Followers}</h1>
              <h1 className="h3">Ratings : {profile.Rating}</h1>
              <h1 className="h3">Address : {profile.Address}</h1>
            </div>
            <div className="card-footer">
                <MessageButton id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
