import React, { useEffect, useRef } from 'react';
import '../../Styles/Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
const currentFooterref = footerRef.current


    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current.classList.add('fade-up');
        }
      },
      {
        threshold: 0.1 // Déclenche l'animation lorsque 10% du footer est visible
      }
    );

    if ( currentFooterref) {
      observer.observe( currentFooterref);
    }

    return () => {
      if ( currentFooterref) {
        observer.unobserve( currentFooterref);
      }
    };
  }, []);

  return (
    <div className="Footer" ref={footerRef}>
      <div className="Footerconatiner">
        <div className="Footertext">
          <p>Let's work togother.</p>
          <p className='Footertextfixed'>Get in touch.</p>
        </div>
        <div className="Footerlink">
          <Link to="/"><div className="Footerlogo"><p>DA-AGENCY </p></div></Link>
          <div className="Footernav">
            <Link to="/"><button>Twitter</button></Link>
            <Link to="/"><button>Linkedin</button></Link>
            <Link to="/"><button>Mail</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
