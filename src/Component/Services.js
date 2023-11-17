import React from 'react'
import '../App.css'
import Logo1 from '../Image/Education.png'
import Logo2 from '../Image/certificate.png'
import Logo3 from '../Image/worl-removebg-preview.png'
export default function Services() {
  return (
    <div>
     <>
     <div className='container'>
        <div className='row text-center mt-4'>
            <h3 className='services'>Services</h3>
        </div>
        <div className='row'>
            <p className='ptagcontent'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. T
            </p>
        </div>
     </div>
     
     <div className='row text-center '>
        <div className='col-xl-4 col-xxl-4 col-md-4 col-lg-4 col-xs-12 col-sm-12'>
            <img src={Logo1} className='img-fluid w-50'/>
            <div className='row'>
                <h4 className='title'>PWD</h4>
            </div>
            <div className='row'>
                <p className='text-start text-center standard '>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                </p>
            </div>
            <div className='row'>
            <ul className="list-group">
  <li className="list-group-item standard">Cras justo odio</li>
  <li className="list-group-item standard">Dapibus ac facilisis in</li>
  <li className="list-group-item standard">Morbi leo risus</li>
  <li className="list-group-item standard">Porta ac consectetur ac</li>
  <li className="list-group-item standard">Vestibulum at eros</li>
</ul>
            </div>
        </div>
        <div className='col-xl-4 col-xxl-4 col-md-4 col-lg-4 col-xs-12 col-sm-12'>
            <img src={Logo2} className='img-fluid w-50'/>
            <div className='row'>
                <h4 className='title'>Master</h4>
            </div>
            <div className='row'>
                <p className='text-start text-center  standard'>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                </p>
            </div>
            <div className='row'>
            <ul className="list-group">
  <li className="list-group-item standard">Cras justo odio</li>
  <li className="list-group-item standard">Dapibus ac facilisis in</li>
  <li className="list-group-item standard">Morbi leo risus</li>

</ul>
            </div>
        </div>
        <div className='col-xl-4 col-xxl-4 col-md-4 col-lg-4 col-xs-12 col-sm-12'>
            <img src={Logo3} className='img-fluid w-50'/>
            <div className='row'>
                <h4 className='title'>Research Work</h4>
            </div>
            <div className='row'>
                <p className='text-start text-center standard '>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                </p>
            </div>
            <div className='row'>
            <ul className="list-group">
  <li className="list-group-item standard">Cras justo odio</li>
  <li className="list-group-item standard">Dapibus ac facilisis in</li>
</ul>
            </div>
        </div>
     </div>
     
     </>
    </div>
  )
}
