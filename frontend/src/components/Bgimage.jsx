import React from 'react'
import image from "../img/image.png"; 

const Bgimage = () => {
  return (
    <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", height:"70vh", marginTop: "-70px" }}>
  </div>
  
  )
}

export default Bgimage