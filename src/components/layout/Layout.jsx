import React from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';

function Layout({children}) {
  return (
    <div>
        <NavBar/>
        <div className='content'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout