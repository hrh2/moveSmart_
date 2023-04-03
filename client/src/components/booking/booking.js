import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../style.css"
import React,{useEffect,useState} from "react";
import Axios from "axios";
import { FaChair } from 'react-icons/fa'


function Booktickets() {

     const [stations, setStations] = useState([]);

     useEffect(() => {
          const fetchStations = async () => {
               const token = localStorage.getItem('token');
               if (!token) {
                    throw new Error('No token found');
               }
               const headers = { Authorization: `Bearer ${token}` };
               const response = await Axios.get('http://localhost:3005/api/book', { headers });
               setStations(response.data);
               console.log(response);
          };

          fetchStations();
     }, []);

     const handleBookClick = async (e, stationName, destName, carName) => {
          e.preventDefault();
          const token = localStorage.getItem('token');
          if (!token) {
               throw new Error('No token found');
          }
          const headers = { Authorization: `Bearer ${token}` };
          console.log(token);
          try {
               const response = await Axios.post('http://localhost:3005/api/bookSpace', {
                    stationName,
                    destName,
                    carName
               }, { headers });
               window.location.reload();
          } catch (error) {
               console.log(error);
          }
     };

     return (
         <div className='container-fluid main2'>
               <div className='bg-primary container-fluid mx-1 p-1 rounded row'>
                    <div className='row '>
                         <div className='col container'>
                              <h1 className='h3 bold '>Smart<span className='h3 fw-bold text-warning'>MOVE</span></h1>
                         </div>
                         <div className='col container'>
                              {/* {error && <Alert variant="danger">{error}</Alert>} */}
                         </div>
                         <div className='col-6 container'>
                              <ul className="nav nav-tabs bg-light rounded">
                                   <li className="nav-item">
                                        <a className="nav-link active text-yellow" aria-current="page" href="/goBook">Reload</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link text-blue fw-bold" href="/">Home</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link text-blue fw-bold" href="rental">Car Rentals</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link text-blue fw-bold" href='/aboutUs'>About Us</a>
                                   </li>
                              </ul>
                         </div>
                         <div className='col container'>
                            
                         </div>
                    </div>
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
                                                                 <form key={dest._id} onSubmit={(e) => handleBookClick(e, station.name, dest.name, document.querySelector(`input[name="${dest.name}"]:checked`).value)}>
                                                                      <h5>{dest.name}</h5>
                                                                      <div>
                                                                           {dest.cars.map((car) => (
                                                                                <div class="d-flex align-items-center mb-3">
                                                                                     <div class="col-6">
                                                                                          <div class="form-check">
                                                                                               <input class="form-check-input" type="radio" name={dest.name} value={car.name} id={`radio-${car.name}`} />
                                                                                               <label class="form-check-label ml-2" for={`radio-${car.name}`}>
                                                                                                    {car.name}<span style={{ color: 'gray' }}> :{car.time}</span>
                                                                                               </label>
                                                                                          </div>
                                                                                     </div>
                                                                                     <div class="col-6">
                                                                                          <div class="d-flex justify-content-end">
                                                                                               <div class="border rounded p-2">
                                                                                                    <div class="d-flex justify-content-between align-items-center">
                                                                                                         <span>{car.size}</span>
                                                                                                         <div class="border-left mx-2"></div>
                                                                                                         <span><FaChair size='2em' /></span>
                                                                                                    </div>
                                                                                               </div>
                                                                                          </div>
                                                                                     </div>
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