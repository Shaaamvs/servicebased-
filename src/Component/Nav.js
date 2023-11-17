import React from 'react'
import Logo from '../Image/coffee-shop-clipart-images-34.png'
import  '../App.css'
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
export default function Nav() {
  return (
  <>
  <nav className="navbar navbar-expand-lg mx-5 navigationbar static-top">
            <div className="container-fluid">
                <img src={Logo} className="img-fluid logos"/>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon">
                    <ReorderRoundedIcon/>
                    </span>
                </button>
                <div className="offcanvas offcanvas-end d-lg-none" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                         

                         
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                            <li className="nav-item">
                                <a className="nav-link text-dark hoverhome fw-bold" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark hoverhome fw-bold" href="#">About Us </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark hoverhome fw-bold" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark hoverhome fw-bold" href="#">Online Order </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark hoverhome  fw-bold" href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collapse navbar-collapse d-lg-flex justify-content-end ">
                    <ul className="navbar-nav mx-5 gap-5">
                        <li className="nav-item">
                            <a className="nav-link hoverhome text-dark fw-bold" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  hoverhome text-dark fw-bold" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hoverhome  text-dark fw-bold" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link hoverhome text-dark fw-bold" href="#">Online Order </a>
                        </li>
                     
                        <li className="nav-item">
                            <a className="nav-link hoverhome  text-dark fw-bold" href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  </>
  )
}
