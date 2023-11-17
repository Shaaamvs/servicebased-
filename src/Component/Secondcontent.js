import React from 'react'
import '../App.css'
import Coffee from '../Image/pexels-photo-3806690.webp'
import time from '../Image/11-2-time-free-png-image.png'
import Setting from '../Image/Service-Gear-PNG-Free-Download.png'
import Service from '../Image/123.png'
import Account from '../Image/234.png'
export default function Secondcontent() {
    return (
        <div>
            <>
                <div className='container'>
                    <div className='row text-center mt-5'>
                        <h3 className='h2 WhatisLoremIpsum'>What is Lorem Ipsum ?</h3>
                    </div>


                    <div className='row mt-4 text-center '>
                        <div className='col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12'>
                            <p className=' LoremIpsum text-start '>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>

                        <div className='col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-xs -12 col-sm-12'>
                            <img src={Coffee} className='img-fluid  rounded coffeeimage' />
                        </div>
                    </div>





                    <div className='row text-center'>
                        <div className='col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12 col-lg-3'>
                            <img src={time} className='img-fluid w-50' />
                            <div className='row'>
                                <p className='texttag'>LoremIpsum</p>
                            </div>

                        </div>
                        <div className='col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12 col-lg-3'>
                            <img src={Account} className='img-fluid w-50' />
                            <div className='row'>
                                <p className='texttag'>LoremIpsum</p>
                            </div>
                        </div>
                        <div className='col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12 col-lg-3'>
                            <img src={Service} className='img-fluid w-50' />
                            <div className='row'>
                                <p className='texttag'>LoremIpsum</p>
                            </div>
                        </div>
                        <div className='col-xl-3 col-xxl-3 col-md-3 col-xs-12 col-sm-12 col-lg-3'>
                            <img src={Setting} className='img-fluid w-50' />
                            <div className='row'>
                                <p className='texttag'>LoremIpsum</p>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        </div>
    )
}
