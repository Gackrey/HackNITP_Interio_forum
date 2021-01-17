import React from "react";
import axios from "axios";
import downloadicon from '../pics/download.png';

function ShowTemplete({ name, image_url }) {
  const download = () => {
    axios({
      url:image_url,
      method:'GET',
      responseType:'blob'
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'image.jpg');
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div className="card-column m-2">
        <div className="card-image-top">
          <img
            src={image_url}
            alt=""
            style={{ width: "320px", height: "300px" }}
          />
        </div>
        <div className="card-title text-center">{name}</div>
       <button style = {{ width: "44px", height: "39px", opacity: "0.8",border:"none",borderRadius:"8px",position: "relative", top: "-77px", left: "269px"}} onClick={download}><img style={{ width: "23px", height: "23px"}} src={downloadicon}/></button>
      </div>
    </>
  );
}

export default ShowTemplete;
