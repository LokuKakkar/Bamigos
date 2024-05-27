import React,{useState} from 'react'
import "./Arenas.css"
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




const arenaList = [
    {
        arenaName: "Metablaster Arena V1.0",
        arenaImg: "https://ambitious-fish-f59.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe431c661-c7fb-4c62-b49f-5b3321b14eb3%2F961fc48f-9d4c-4c9c-a3f4-da5d4ef7d9e5%2Fmega_arena-final.13.jpg?table=block&id=b65d3a1f-98c2-4976-9078-dc73541146af&spaceId=e431c661-c7fb-4c62-b49f-5b3321b14eb3&width=2000&userId=&cache=v2",
        arenaDesc: "Adventure Through Indian Monuments as a Peacock"        
    },
    {
        arenaName: "Metablaster Arena V2.0",
        arenaImg: "https://ambitious-fish-f59.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe431c661-c7fb-4c62-b49f-5b3321b14eb3%2F76eabc4e-90fb-44de-bb05-505f8e42a67a%2F6mx6m_B.jpg?table=block&id=81c2721f-bea8-4b76-8c2b-78f7b1ead6f3&spaceId=e431c661-c7fb-4c62-b49f-5b3321b14eb3&width=1420&userId=&cache=v2",
        arenaDesc: "Navigate the Dot through musical notes for Ticket Prizes"    
    },
    

]


const Arenas = () => {

    const [isHovered, setIsHovered] = useState(false);


  return (
    <div className='arenaShowOff' id='arenaShowoff'
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="300"
        data-aos-offset="100" >

            <Typography gutterBottom variant="h2" component="div" >                    
                <h2 className='arcadeNameFont' style={{textAlign: "center"}} >
                Check out Our Arenas
                </h2>
            </Typography>

        <div style={{display: "flex", justifyContent: "space-between"}}>

        {arenaList.map((item,index) =>  (
                    

        <div className='card' key={index} >
            <div  className='card_content' onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <CardActionArea>
                    <CardMedia 
                    component="img"
                    image={item?.arenaImg}
                    alt={item?.arenaName}
                    className='card_media'
                    
                    style={{maxHeight: "60vh"}}
                    />
                    <div>
                    <Typography gutterBottom variant="h5" component="div" >
                        <h5 className='arcadeNameFont'>
                        {item?.arenaName}

                        </h5>
                    </Typography>
                    <Typography variant="body2" style={{fontFamily: "Courier"}}>
                        {item?.arenaDesc}
                    </Typography>
                    </div>
                </CardActionArea>
                {/* Play button */}
                
            </div>

        </div>

                ))}
        </div>


    
    </div>
  )
}

export default Arenas