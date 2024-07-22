import '../../Styles/Profils.css'
import profil1 from '../../Assets/ProfilsAssets/profil1.jpg'
import profil2 from '../../Assets/ProfilsAssets/profil2.jpg'
import instagram from '../../Assets/ProfilsAssets/instagram-logo-24.png'
import algohia from '../../Assets/ProfilsAssets/algolia-logo-24.png'
import behance from '../../Assets/ProfilsAssets/behance-logo-24.png'
import figma from '../../Assets/ProfilsAssets/figma-logo-24 (1).png'
import firefox from '../../Assets/ProfilsAssets/firefox-logo-24.png'
import imdb from '../../Assets/ProfilsAssets/imdb-logo-24.png'
import linkedin from '../../Assets/ProfilsAssets/linkedin-logo-24.png'
import microsoft from '../../Assets/ProfilsAssets/microsoft-logo-24.png'
import patreon from '../../Assets/ProfilsAssets/patreon-logo-24.png'
import snapchat from '../../Assets/ProfilsAssets/snapchat-logo-24.png'
import square from '../../Assets/ProfilsAssets/squarespace-logo-24.png'
import twitch from '../../Assets/ProfilsAssets/twitch-logo-24.png'
import wix from '../../Assets/ProfilsAssets/wix-logo-24.png'
import yahoo from '../../Assets/ProfilsAssets/yahoo-logo-24.png'
import flutter from '../../Assets/ProfilsAssets/flutter-logo-24.png'

import { useRef, useEffect } from 'react'

function Profils(){


    
    const ProfilRef = useRef(null);

  useEffect(() => {
const currentProfilRef = ProfilRef.current


    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            ProfilRef.current.classList.add('fade-up');
        }
      },
      {
        threshold: 0.1 // Déclenche l'animation lorsque 10% du home est visible est visible
      }
    );

    if ( currentProfilRef) {
      observer.observe( currentProfilRef);
    }

    return () => {
      if ( currentProfilRef) {
        observer.unobserve( currentProfilRef);
      }
    };
  }, []);


return(


    

<div className="PROFILS" ref={ProfilRef}>
    <div className="Profils">
        <h1>Hey ✌✌ i'm Jacques</h1>
    </div>
<div className="ProfilsImg">
    <div className="bloc1">
        <img src={profil1} alt= "" />  
        <img src={profil2} alt= "" />         
          </div>
</div>
<div className="ProfilsAbout">
    <div className="Aboutnav"><button>About</button></div>
    <div className="Abouttext"><p>A freelance designer based in the UK. I <br /> combine my experience in product and <br /> brand to solve problems, tell stories, and <br /> create compelling experiences.</p></div>
</div>
<div className="ProfilsExperience">
    <div className="ExperienceNav">
        <button>Experience</button></div>
        <h1>Where I've worked</h1>


<div className="ExperienceContainer">
    <div className="Bloc">
        <div className="blocc1">
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>

        <div className="blocc1"><p></p>
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>
        <div className="blocc1"><p></p>
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>
        <div className="blocc1"><p></p>
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>
        
    </div>
    <div className="Bloc">
    <div className="blocc1"><p></p>
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>

        <div className="blocc1"><p></p>
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>
        
        <div className="blocc1"><p></p>
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>
        <div className="blocc1"><p></p>
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>
    </div>


    <div className="Bloc">
    <div className="blocc1"><p></p>
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>

        <div className="blocc1"><p></p>
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>

        <div className="blocc1"><p></p>
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>

        <div className="blocc1"><p></p>
        <p>2023-Present</p>
        <p className="experiencetextfixed">Native State</p>
        <p>Design Director</p>
        <button>Co-Founder</button>
        </div>
    </div>


    

</div>
</div>
<div className="ProfilsExperience">
<div className="ClientsNav">
        <button>Clients</button>
        <h1>Who I've worked with</h1>
        </div>
        

</div>
<div className="ClientsContainer">

    <div className="Bloc">
        <div className="blocc1">
            <div className="img"><img src={instagram} alt="" /></div>
            <div className="img"><img src={algohia} alt="" /></div>
            <div className="img"><img src={behance} alt="" /></div>
            <div className="img"><img src={figma} alt="" /></div>
        </div>
    </div>

    <div className="Bloc">
        <div className="blocc1">
        <div className="img"><img src={firefox} alt="" /></div>
        <div className="img"><img src={flutter} alt="" /></div>
        <div className="img"><img src={imdb} alt="" /></div>
        <div className="img"><img src={instagram} alt="" /></div>
        </div>
    </div>

    <div className="Bloc">
        <div className="blocc1">
        <div className="img"><img src={linkedin} alt="" /></div>
        <div className="img"><img src={microsoft} alt="" /></div>
        <div className="img"><img src={patreon} alt="" /></div>
        <div className="img"><img src={snapchat} alt="" /></div>
        </div>
    </div>

    <div className="Bloc">
        <div className="blocc1">
        <div className="img"><img src={square} alt="" /></div>
        <div className="img"><img src={twitch} alt="" /></div>
        <div className="img"><img src={wix} alt="" /></div>
        <div className="img"><img src={yahoo} alt="" /></div>
        </div>
    </div>
</div>
</div>
)

}


export default Profils