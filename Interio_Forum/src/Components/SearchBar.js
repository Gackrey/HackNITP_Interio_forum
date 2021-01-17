import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const URL = "/api/designers";
function SearchBar() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [location, setLocation] = useState("");
  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    const newData = data.find((item) => item.Name === name);
    console.log("this is new data", newData);
    if (newData !== undefined) {
      setId(newData.id);
      console.log("this is id", id);
    } else {
      setId("noUser");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setId("");
    setName(e.target.value);
    getData();
  };
  // A function for search by location

  return (
    <div className="row">
      <div className="col offset-1">
        <form className="form-inline my-3" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search designers"
              onChange={(e) => handleClick(e)}
            />
            {/* <ButtonsLinks data={name} /> */}
            <Link
              to={`/${id}`}
              className="btn btn-info mx-2"
              // onClick={(e) => handleClick(e)}
            >
              <AiOutlineSearch />
            </Link>
            <input
              type="text"
              className="form-control"
              placeholder="Search By Location"
              onChange={(e) => setLocation(e.target.value)}
            />

            <Link
              to={`/consult/${location}`}
              data={location}
              className="btn btn-info mx-2"
            >
              Search By Location
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
