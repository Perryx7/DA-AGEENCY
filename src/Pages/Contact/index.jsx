 import '../../Styles/Contact.css'
 import { Link } from 'react-router-dom'
 
 function Contact(){

return (
    <div className="CONTACT">
        <div className="Contact">
            <div className="textContact">
                <p>Let's work together.</p>
                <p  className="Contacttextfixed" >Get in touch.</p>
            </div>
            <div className="ContactNAV">
            <Link to="/"><div className="Footerlogo"><p>DA-AGENCY </p></div></Link>
            <div>
            <Link to="/"><button>Twitter</button></Link>
            <Link to="/"><button>Linkedin</button></Link>
            <Link to="/"><button>Mail</button></Link>
            </div>
            
          </div>
        </div>
    </div>
)

 }

 export default Contact