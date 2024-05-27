import React from "react";
// import HeroPng from "../../assets/coffee2.png";
import bamigos_background_starry from "../../assets/bamigos_background_starry.png"

const bgImage = {
  backgroundImage: `url(${bamigos_background_starry})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "90vh",
  width: "100%",
};



const Hero = () => {
  return (
    <>
      <div style={bgImage}>
        
      </div>
    </>
  );
};

export default Hero;