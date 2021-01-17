import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ShowList from "./ShowList";
const URL = "/api/designers";
function SearchedLocation() {
  console.log("this is from search location page", useParams());
  const { locationSearch } = useParams();
  const [list, setList] = useState([]);
  console.log("this is new location", locationSearch);
  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log("this is data", data);

    const newData = data.filter((item) => item.Address === locationSearch);
    console.log("this is the new data ", newData);

    setList(newData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="container">
        <div className="row">
          <div className="col offset-1">
            {list.map((item) => {
              const { id, Name, avatar_url, Rating } = item;
              return (
                <ShowList
                  id={id}
                  Name={Name}
                  avatar_url={avatar_url}
                  Rating={Rating}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchedLocation;
