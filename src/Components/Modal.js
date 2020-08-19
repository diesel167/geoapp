import React from "react";

const Modal = ({show, setShow, currentPos}) => {
  const parser = new DOMParser();
  const icon = parser.parseFromString(`&#10006`, 'text/html').body.textContent;
  let div = <div className='modal'>
    <div className='close' onClick={()=>{
      setShow(false);
    }}>{icon}</div>
    <h3>Area info</h3>
    <p>{`Latitude: ${currentPos[0]}`}</p>
    <p>{`Longitude: ${currentPos[1]}`}</p>
  </div>;
  if (show) {
    return div;
  }
  return <></>
};
export default Modal;
