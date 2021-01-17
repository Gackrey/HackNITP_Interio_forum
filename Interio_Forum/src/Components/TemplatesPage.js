import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ShowTemplete from "./ShowTemplete"
function TemplatesPage({ addClass }) {

  // Living Room Fetching

  const livingroomurl = "/api/templete/livingroom";
  const [livingroom, setLivingroom] = useState([]);

  const getLivingroomData = async () => {
    const response = await fetch(livingroomurl);
    const data = await response.json();
    setLivingroom(data);
  };

  useEffect(() => {
    getLivingroomData();
  }, []);

 // Dining Room Fetching

  const diningroomurl = "/api/templete/dining";
  const [diningroom, setDiningroom] = useState([]);

  const getDiningroomData = async () => {
    const response = await fetch(diningroomurl);
    const data = await response.json();
    setDiningroom(data);
  };

  useEffect(() => {
    getDiningroomData();
  }, []);

  // Bed Room Fetching

  const bedroomurl = "/api/templete/bedroom";
  const [bedroom, setBedroom] = useState([]);

  const getBedroomData = async () => {
    const response = await fetch(bedroomurl);
    const data = await response.json();
    setBedroom(data);
  };

  useEffect(() => {
    getBedroomData();
  }, []);

  return (
    <>
      <Navbar />
      <h1 className = "text-center my-4">Living Room</h1>
      <div className={addClass}>
        {livingroom.map((item) => {
          return <ShowTemplete {...item} key={item.name} />;
        })}
      </div>
      <h1 className = "text-center  my-4">Bed Room</h1>
      <div className={addClass}>
        {bedroom.map((item) => {
          return <ShowTemplete {...item} key={item.name} />;
        })}
      </div>
      <h1 className = "text-center  my-4">Dining Room</h1>
      <div className={addClass}>
        {diningroom.map((item) => {
          return <ShowTemplete {...item} key={item.name} />;
        })}
      </div>
    </>
  );
}

export default TemplatesPage;
