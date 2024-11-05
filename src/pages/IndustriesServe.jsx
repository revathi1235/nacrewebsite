import React from 'react'
import {  Container  } from 'react-bootstrap'


function IndustriesServe() {
  return (
    <div style={{height:"55vh"}} className='IndustriesServe-page'>
    <h2 className='IndustriesServe-heading'>Industry Experts Call Us a Differentiator</h2>
    <Container >
    <div class="image-container">
    <div class="image-item">
    <img src="../Assets/cpg.jpg" alt="" className='ms-5' />
    <span>FMCG</span>
  </div>
  <div class="image-item">
    <img src="../Assets/FB.jpg" alt=""  className='ms-5' />
    <span>F & B</span>
  </div>
  <div class="image-item">
    <img src="../Assets/apparel.jpg" alt=""  className='ms-5' />
    <span>Apparel</span>
  </div>
  <div class="image-item">
    <img src="../Assets/pharma.PNG" alt=""  className='ms-5' />
    <span>Pharma</span>
  </div>
 
 
  
</div>
<svg width="100" height="100" >
      <img src="../Assets/eco.jpg" alt="" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">SVG</text>
    </svg>
</Container>


    </div>
  )
}

export default IndustriesServe
