import React,{useState} from 'react'
import "./Arcades.css"
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




const arcadeList = [
    {
        arcadeName: "Flapika",
        arcadeImg: "https://ambitious-fish-f59.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe431c661-c7fb-4c62-b49f-5b3321b14eb3%2Fa0d71d96-d0f4-48eb-bf05-7f62ce89b8c5%2FFLAPIKA.23.jpg?table=block&id=c31a1ed5-7bbd-49a9-8bcb-098c4ca4ef18&spaceId=e431c661-c7fb-4c62-b49f-5b3321b14eb3&width=2000&userId=&cache=v2",
        arcadeDesc: "Adventure Through Indian Monuments as a Peacock"        
    },
    {
        arcadeName: "Beat Blaze",
        arcadeImg: "https://ambitious-fish-f59.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe431c661-c7fb-4c62-b49f-5b3321b14eb3%2Fba21711d-1fbb-4c46-be88-5f10d04f22ca%2FBEAT_BLAZE.25.jpg?table=block&id=42b217b1-0faf-4f36-87c6-9ad433779588&spaceId=e431c661-c7fb-4c62-b49f-5b3321b14eb3&width=2000&userId=&cache=v2",
        arcadeDesc: "Navigate the Dot through musical notes for Ticket Prizes"    
    },
    {
        arcadeName: "Panda Escape",
        arcadeImg: "https://ambitious-fish-f59.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fe431c661-c7fb-4c62-b49f-5b3321b14eb3%2Fbdb9676c-cc65-42f4-8474-558dc0a3db06%2FPANDA_ESCAPE.28.jpg?table=block&id=17cf8e03-0416-47dd-a038-42001349b2b6&spaceId=e431c661-c7fb-4c62-b49f-5b3321b14eb3&width=2000&userId=&cache=v2",
        arcadeDesc: "Help the Panda ascend a tree against the backdrop of India Gate."        
    }

]


const Arcades = () => {

    const [isHovered, setIsHovered] = useState(false);


  return (
    <div className='arcadeShowOff'
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="300"
        data-aos-offset="100"
         style={{backgroundColor: "#36454F" }}>

            <Typography gutterBottom variant="h2" component="div" >                    
                <h2 className='arcadeNameFont' style={{textAlign: "center"}} >
                Check out Our Arcades
                </h2>
            </Typography>


        <div style={{display: "flex", justifyContent: "space-between"}}>

        {arcadeList.map((item,index) =>  (
                    

        <div className='card' key={index} >
            <div  className='card_content' onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <CardActionArea>
                    <CardMedia 
                    component="img"
                    image={item?.arcadeImg}
                    height="130"
                    alt={item?.arcadeName}
                    className='card_media'
                    style={{maxHeight: "60vh"}}
                    />
                    <div>
                    <Typography gutterBottom variant="h5" component="div" >
                        <h5 className='arcadeNameFont'>
                        {item?.arcadeName}

                        </h5>
                    </Typography>
                    <Typography variant="body2" style={{fontFamily: "Courier"}}>
                        {item?.arcadeDesc}
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

export default Arcades