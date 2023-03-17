import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../style.css"
import React, { useEffect, useState } from "react";
import axios from "axios";


function Booktickets() {

     const [stations, setStations] = useState([]);

     useEffect(() => {
          const fetchStations = async () => {
               const response = await axios.get('http://localhost:3005/api/book');
               setStations(response.data);
               console.log(response)
          };

          fetchStations();
     }, []);

     return (
          <div className='container-fluid main2'>
               <div className='row'>
                    <ul className="nav nav-tabs bg-aliceblue">
                         <li className="nav-item">
                              <a className="nav-link active text-yellow" aria-current="page" href="/goBook">Reload</a>
                         </li>
                         <li className="nav-item">
                              <a className="nav-link text-blue" href="/">Home</a>
                         </li>
                         <li className="nav-item">
                              <a className="nav-link text-blue" href="rental">Car Rentals</a>
                         </li>
                         <li className="nav-item">
                              <a className="nav-link text-blue" href='/aboutUs'>About Us</a>
                         </li>
                    </ul>
               </div>
               <div className='row justify-align-content-md-center p-4'>
                    <div className='col col-lg-2'>
                         <div className='row'>
                              <h1 className="text-center fw-bold">Stations</h1>
                              <form class="d-flex mt-3">
                                   <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                   <button class="btn btn-warning btn-sm" type="submit">Search</button>
                              </form>
                         </div>
                         <div class='row border p-1 mt-3 seachDiv' style={{ height: '55vh', overflowY: 'scroll' }} >
                              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                   <ul class="nav nav-pills flex-column w-100">
                                        {stations.map((station) => (
                                             <li key={station.name} className="nav-item d-block">
                                                  <a class="nav-link fw-bold text-center" href={`#${station.name}`}> {station.name}</a>
                                             </li>
                                        ))}
                                   </ul>
                              </nav>
                         </div>
                    </div>

                    <div className='col-8 stationsDiv'>
                         <h3 className='m-3'>Your choice belong Here</h3>
                         <div data-bs-spy="scroll" data-bs-smooth-scroll="true" class="scrollspy-example bg-aliceblue p-3 rounded-2" tabindex="0">
                              {stations.map((station) => (
                                   <div key={station._id} id={`${station.name}`} className="card p-1 mb-2" >
                                        <div className='card-header'>
                                             <h3 style={{ color: '#053a58', }}>{station.name}<span style={{ color: 'blue', }}> /Location: {station.location}</span></h3>

                                        </div>
                                        <div>
                                             <h4 style={{ color: 'aliceblue' }}>Destinations:</h4>
                                             <div className="">
                                                  <div class="card-body " style={{ height: '55vh', overflowY: 'scroll' }} >
                                                       {station.destination.map((dest) => (
                                                            <div className='card m-1 p-1'>
                                                                 <form key={dest._id} className="">
                                                                      <h5>{dest.name}</h5>
                                                                      <div>
                                                                           {dest.cars.map((car) => (
                                                                                <div class="form-check btn-btn-group-vertical">
                                                                                     <label class="form-check-label" for="inlineRadio2">
                                                                                          {car.name}<span style={{ color: 'gray' }}> :{car.time}</span>
                                                                                     </label>
                                                                                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={car.name}></input>
                                                                                </div>
                                                                           ))}
                                                                      </div>
                                                                      <button className="btn mt-3" type="submit" style={{ backgroundColor: '#053a58', color: 'white', fontWeight: 'bold', borderColor: 'transparent' }}>Book</button>
                                                                 </form>
                                                            </div>
                                                       ))}
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                              ))}
                         </div>
                    </div>
                    <div className='col bg-primary rounded'>

                    </div>
               </div>
          </div>
     )
}

export default Booktickets;