
import React, { useState, useEffect } from 'react';

function Navbar() {
    
    const [scrolled,setScrolled] = useState(false);
      const handleScroll=() => {
          const offset=window.scrollY;
          if(offset > 200 ){
            setScrolled(true);
          }
          else{
            setScrolled(false);
          }
        }
      
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
        
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        
      let navbarClasses=['header'];
        if(scrolled){
          navbarClasses.push('scrolled');
        }
return (
    <>
        <header className={scrolled ? 'header scrolled' : 'navbar'}
>
            <nav className='nav--container'>
                <a href="index.html" className='nav--logo'>Hyggex.</a>
                <div className='nav--menu'>
                    <ul className='nav--list'>
                        <li className='nav--item'>
                            <a href="#home" className='nav--link'>
                                Home
                            </a>
                        </li>
                        <li className='nav--item'>
                            <a href="#about" className='nav--link'>
                                FlashCard
                            </a>
                        </li>
                        <li className='nav--item'>
                            <a href="#skills" className='nav--link'>
                                Contact
                            </a>
                        </li>
                        <li className='nav--item'>
                            <a href="#portfolio" className='nav--link'>
                                FAQ
                            </a>
                        </li>
                        <li>
                            <button className="btn">Login</button>
                        </li>                        
                    </ul>
                </div>
                   
            </nav>
        </header>
    </>
  )
}

export default Navbar;