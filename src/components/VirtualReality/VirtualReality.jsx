import React from 'react'

const VirtualReality = () => {
  return (
    <div style={{backgroundColor: "#36454F" , fontFamily:"sans-serif", fontWeight:600 , height: "100vh"}}>

        <div className="min-h-[550px] sm:min-h-[600px]  flex justify-center items-center text-white" style={{justifyContent: "center"}}>


            <div className=" gap-6 pt-12 sm:pt-0  sm:text-left order-2 sm:order-1" style={{alignContent: "center", alignItems: "center", justifyContent:"center", maxWidth: "60vw"}}>

                <h1 
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-offset="100"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    style={{textAlign: "center"}}
                >
                    GET IMMERSED IN THE WORLD OF VIRTUAL REALITY.
                </h1>

            </div>

        </div>
    </div>
  )
}

export default VirtualReality