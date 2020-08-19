import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, Circle, TileLayer, Popup } from 'react-leaflet';

import Modal from "./Components/Modal";
import './App.css';

function App() {
  let [center, setCenter] = useState([0,0]);
  let [currentPos, setCurrentPos] = useState([0,0]);
  let [radius, setRadius] = useState(0);
  let [areaSelection, setAreaSelection] = useState(false);
  let [show, setShow] = useState(false);
  const handleClick = (e) =>{
    if(areaSelection){
      console.log('as');
      setAreaSelection(false);
      setShow(true);
    }
    else{
      setShow(false);
      setRadius(0);
      setCurrentPos([e.latlng.lat,e.latlng.lng]);
      setCenter([e.latlng.lat,e.latlng.lng]);
      setAreaSelection(true);
    }
  };
  const moving = (e) =>{
    if(areaSelection){
      setRadius(Math.sqrt(Math.pow((e.latlng.lat-center[0]),2)+Math.pow((e.latlng.lng-center[1]),2)));
    }
  };

  return (
      <>
        <div className="App">
          <LeafletMap
              center={[50, 10]}
              zoom={8}
              attributionControl={true}
              zoomControl={true}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={true}
              animate={true}
              easeLinearity={0.35}
              onClick={(e)=>handleClick(e)}
              onMouseMove={(e)=>moving(e)}>
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Circle center={center} fillColor="blue" radius={radius*85000}/>
          </LeafletMap>
        </div>
        <Modal show={show}
               setShow={setShow}
               currentPos={currentPos}/>
      </>
  );
}

export default App;
