import '../../Styles/Home.css'
import 'animate.css'
import { useEffect,useRef } from 'react'
import Model from '../../Assets/HomeAssets/Model.jpg'
import channel from '../../Assets/HomeAssets/channel.jpg'
import diamond from '../../Assets/HomeAssets/diamond.jpg'
import shoes from '../../Assets/HomeAssets/shoes.jpg'
import phone from '../../Assets/HomeAssets/phone.jpg'
import onlineshop from '../../Assets/HomeAssets/onlineshop.jpg'
import paperstreet from '../../Assets/HomeAssets/paperstreet.jpg'
import safari from '../../Assets/HomeAssets/safari.jpg'
import desktop from '../../Assets/HomeAssets/desktop.jpg'
import video1 from '../../Assets/HomeAssets/video1.mp4'
import video2 from '../../Assets/HomeAssets/video2.mp4'
import video3 from '../../Assets/HomeAssets/video3.mp4'



function Home (){


    const HomeRef = useRef(null);

  useEffect(() => {
const currentHomeref = HomeRef.current


    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          HomeRef.current.classList.add('fade-up');
        }
      },
      {
        threshold: 0.1 // Déclenche l'animation lorsque 10% du home est visible est visible
      }
    );

    if ( currentHomeref) {
      observer.observe( currentHomeref);
    }

    return () => {
      if ( currentHomeref) {
        observer.unobserve( currentHomeref);
      }
    };
  }, []);


return(
    <div className='HOME'  ref={HomeRef}>

<div className="Home">
   <div className="HomeText">
    <h1 >A brand and product designer working with clients globally</h1>
    <div className="HomeLink">
        <button  className='btn-fixed1'> Expertise</button>
        <button>Branding</button>
        <button>Product</button>
        <button  className='btn-fixed2'>Design Systems</button>
    </div>
    
    </div>  
</div>

<div className="HomeImage">
    
    <div className="HomeImagecol1">


            <div className='bloc1'>
                <img src={Model} alt =""  />
                <img src={channel} alt =""/>
            </div>


            <div  className='bloc1'>
                <video  controls autoplay loop muted  >
                <source src={video1} type="video/mp4" />
                </video>
                <img src={diamond} alt =""   />
            </div>


            <div   className='bloc1'>
                <img src={phone} alt =""   />
                <img src={shoes} alt =""   />
            </div>
            
    
            <div   className='bloc1'>
                <img src={safari} alt =""  />
                <img src={onlineshop} alt =""   />
            </div>
        

            <div   className='bloc1'>
                <video  controls autoplay loop muted >
                <source src={video2} type="video/mp4" />
                </video>
                <img src={paperstreet} alt =""  />
            </div>
            

            <div   className='bloc1'>
            <video  controls autoplay loop muted >
                <source src={video3} type="video/mp4" />
                </video>
            <img src={desktop} alt =""   />
            </div>
    </div>
</div>




    </div>



)



}


export default Home