import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../style.css"
import React,{useEffect,useState} from "react";
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
         <div className='container-fluid row'>
          <div className='row'>
                    <ul class="nav nav-tabs">
                         <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="/goBook">Reload</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link" href="/">home</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link" href="rental">Car Rentals</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link " href='/aboutUs'>About us</a>
                         </li>
                    </ul>
          </div>
          <div className='row justify-align-content-md-center p-4'>
               <div className='col col-lg-2'>
                <div className='row'>
                    <h1>Stations</h1>
               <form class="d-flex" role="search">
                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                 <button class="btn btn-outline-success btn-sm" type="submit">Search</button>
                </form>
                </div> 
                <div className='row border p-1'>
                              <nav class="navbar navbar-dark bg-dark">
                              <ul class="nav nav-pills">
                                   {stations.map((station) => (
                                        <div>
                                             <li key={station.name} className="nav-item d-block ">
                                                  <a class="navbar-brand fw-bold d-block" href={`#${station.name}`}> {station.name}</a>
                                        </li>
                                        
                                        </div>
                                       
                                   ))}
                              </ul>
                     </nav>
                </div>
               </div>
               <div className='col-6'>
                         <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
                              {stations.map((station) => (
                                   <div key={station._id} id={`${station.name}`} className="card p-1">
                                        <h3>{station.name}<span> /Location: {station.location}</span></h3>
                                        <div>
                                             
                                             <h4>Destinations:</h4>
                                             <div className="">
                                               <div>
                                                       {station.destination.map((dest) => (
                                                            <form key={dest._id} className="">
                                                                 <h5>{dest.name}</h5>
                                                                 <div>
                                                                      {dest.cars.map((car) => (
                                                                           <div class="form-check btn-btn-group-vertical">
                                                                                <label class="form-check-label" for="inlineRadio2">{car.name}<span> :{car.time}</span></label>
                                                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={car.name}></input>
                                                                           </div>
                                                                      ))}
                                                                 </div>
                                                                 <input className='' type="submit" value="Book"></input>
                                                            </form>
                                                       ))}                                              
                                              </div>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
               </div>
               <div className='col'>
                    
               </div>
          </div>
         </div>
     )
}

export default Booktickets;