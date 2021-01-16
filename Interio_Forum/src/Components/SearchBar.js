import React, { useState } from "react";
import ButtonsLinks, { SearchByLocation } from "./ButtonsLinks";
function SearchBar() {
  const [name, setName] = useState("");
  return (
    <div className="row">
      <div className="col offset-1">
        <form className="form-inline my-3" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search designers"
              onChange={(e) => setName(e.target.value)}
            />
            <ButtonsLinks data={name} />

            <input
              type="text"
              className="form-control"
              placeholder="Search By Location"
              onChange={(e) => setName(e.target.value)}
            />
            <ButtonsLinks data={name} />
            <SearchByLocation data={name} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
