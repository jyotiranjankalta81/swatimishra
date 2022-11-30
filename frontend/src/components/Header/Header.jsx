import './Header.css';
import React, { useState, useEffect } from "react";
import {Link, NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from '../../Assets/HomeImages/service.png'
import image2 from '../../Assets/HomeImages/GCMS1.png'
import image3 from '../../Assets/HomeImages/GCMS2.png'
import image4 from '../../Assets/HomeImages/GCMS3.png'

const images = [image1,image2,image3,image4];

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images)
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      }
      else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000)

    return () => clearInterval(intervalId);
  }, [currentIndex])


  return (
    // <div>
    //   <div>
    //     <Link to='/'> <img src="images/Header/logo.png" className="header-dots-img" data-aos="fade-down" alt="" /></Link>
    //     <div className="header_img_div">
    //       <img src={images[currentIndex]} className="header-header-bg" />

    //     </div>

    //     <div class="text-block">

    //       {/* <div className="header-title" data-aos="fade-right">
    //         <h1 className="header-title-h1">Gurushree Minerals Pvt. Ltd.</h1>
    //         <h3 className="header-title-detail" >
    //           Sophisticated mining by deploying
    //           <br /> state of the art machines
    //         </h3>
    //       </div> */}
    //       <div className='premium'>
    //          <h1 className='head2'>Premium GCMS Services</h1>
    //          <h3 className='head3'>Order GCMS Notes From The Website Trusted By Thousand</h3>
    //          <Link to='/order-now'><button className='btn'>Order Now</button></Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="banner--main">
      <img src={images[currentIndex]} alt="" className="banner--main-image" />
      <div className="banner-content">
        <h1 className="banner--header">Premium GCMS Services</h1>
        <p className="banner--description">
          Order GCMS Notes From The Website Trusted By Thousand
        </p>
        <button className="btn--order">Order Now</button>
      </div>
    </div>
  );
}

export default Header;
