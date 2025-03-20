import React from 'react'
import "./Footer.css"
function Footer() {
  return (
<>
      <div className="Footer ">

        <div className='d-flex justify-content-around' style= {{ backgroundColor: "#ADD8E6"}}>
                <div>
                     <p >Your Play , Your Way- MOderm Sports Facilities for Every Passion</p>
                     <button type="button" class="btn btn-light rounded-pill">Louvre sport</button>
                </div>



                <div className='d-flex' style={{
                      gap: "0.5cm"
                }}>
                        <div>
                              <ul>
                                   <h3>Facilities</h3>
                                   <li>Tennis Courts</li>
                                   <li>Basketball Courts</li>
                                   <li>Football Field</li>
                                   <li>swwing Pool</li>
                                   <li>Gym&Fitness Center</li>
                                   <li>Multi-purpose Hall</li>
                                   <li>Sauna & Relaxation Zone</li>
                                   <li>Locker Rooms</li>
                              </ul>
                            
                        </div>
                        <div>
                             <ul>
                                <h3>About</h3>
                                <li>Our Mission</li>
                                <li>Vision</li>
                                <li>Community</li>
                             </ul>
                        </div>

                        <div>
                            <ul>
                                <h3>Social</h3>
                               <div className='d-flex flex-column' style={{gap: "0.5cm"}}>
                               <li><button type="button" className="btn rounded-pill btn-outline-dark">Instagram</button></li>
                                <li><button type="button" className="btn rounded-pill btn-outline-dark">Facebook</button></li>
                                <li><button type="button" className="btn rounded-pill btn-outline-dark">Linkedin</button></li>
                                <li><button type="button" className="btn rounded-pill btn-outline-dark">Whatsapp</button></li>
                               </div>

                            </ul>
                        </div>

                </div>
        </div>

      </div>



</>
  )
}

export default Footer