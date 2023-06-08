import { useState, useEffect} from 'react';
import Axios from 'axios'
import { CgArrowsExchange } from 'react-icons/cg';
import { AiTwotoneCalendar} from 'react-icons/ai';
import { FaRegClock,FaUsers} from 'react-icons/fa';
import History from './history';
import '../style.css';


function MyForm() {
     const [stations,setStations]=useState([]);
     const [from, setFrom] = useState({});
     const [to, setTo] = useState({});
     const [time,setTime]=useState([]);
     const [passengers,setPassengers]=useState(0);
     const [destination,setDestination] = useState([])
     const [searchTermFrom, setSearchTermFrom] = useState("");
     const [searchTermTo, setSearchTermTo] = useState("");
     const [selectedStationFrom, setSelectedStationFrom] = useState("");
     const [selectedStationTo, setSelectedStationTo] = useState("");
     const [showDropdownFrom, setShowDropdownFrom] = useState(false);
     const [showDropdownTo, setShowDropdownTo] = useState(false);
     const handleReverse = () => {
          const NewStation=stations.find(station=>station.name.toLowerCase()===to.name.toLowerCase());
          console.log(NewStation)
          const NewDestination = NewStation.destination.find(dest => dest.name.toLowerCase()===from.name.toLowerCase());
          console.log(NewDestination)
          setFrom(NewStation);
          setTo(NewDestination);
          setTime(NewDestination.time);
     };
     const handleInputChangeFrom = (event) => {
          setFrom(event.target.value);
          setSearchTermFrom(event.target.value);
          setShowDropdownFrom(event.target.value.length > 0);
     };
     const handleInputChangeTo = (event) => {
          setTo(event.target.value);
          setSearchTermTo(event.target.value);
          setShowDropdownTo(event.target.value.length > 0);
     };

     const handleSelectOptionFrom = (station) => {
          setSelectedStationFrom(station);
          setFrom(station);
          setDestination(station.destination);
          setSearchTermFrom(station.name);
          setShowDropdownFrom(false);
     };
     const handleSelectOptionTo = (destination) => {
          setSelectedStationTo(destination);
          setTo(destination);
          setSearchTermTo(destination.name);
          setTime(destination.time);
          setShowDropdownTo(false);
     };
     const matchingStationsFrom = stations.filter((station) =>
          station.name.toLowerCase().includes(searchTermFrom.toLowerCase())
     );
     const matchingStationsTo = destination.filter((destination) =>
          destination.name.toLowerCase().includes(searchTermTo.toLowerCase())
     )
     useEffect(()=>{
          const fetchData= async()=>{
               const serverData = await Axios.get('http://localhost:3050/api/book');
               setStations(serverData.data)
          }
          fetchData()
     },[])
     return (
          <div className='vh-100'>
          <form className="container p-0">
               <div className="form-row align-items-center container">
                    <h2 className='text-decoration-underline headers'>Your Journey</h2>
                    <div className="input-group my-3">
                         <input 
                         type="text" 
                         className="form-control border-end-0 p-3" 
                         aria-label="from" 
                         placeholder="from" 
                         value={from.name} 
                         onChange={handleInputChangeFrom} 
                         required/>
                         <button 
                         type="button" 
                         className="input-group-text border-end-0 border-start-0 p-2 bg-white rotate" 
                         onClick={handleReverse} 
                         disabled={!selectedStationFrom || !selectedStationTo}>
                              <CgArrowsExchange size="3em " className='Exchange-icon' />
                         </button>
                         <input 
                         type="text" 
                         className="form-control border-start-0 p-3" 
                         aria-label="Server" 
                         placeholder="to" 
                         value={to.name} 
                         onChange={handleInputChangeTo} 
                         required/>
                    </div>
                    <div className="row">
                         <div className="col">
                              {showDropdownFrom && <ul className="list-group dropdown-menu border-0 rounded-0">
                                   {matchingStationsFrom.map(station => <li key={station.id} className="list-group-item border-end-0 border-start-0 rounded-0" 
                                        onClick={() => handleSelectOptionFrom(station)}>
                                             {station.name}</li>)}</ul>}
                         </div>
                         <div className="col">
                              {showDropdownTo && <ul className="list-group dropdown-menu border-0 rounded-0">
                                   {matchingStationsTo.map(destination => <li key={destination.name} className="list-group-item border-end-0 border-start-0 rounded-0" 
                                   onClick={() => handleSelectOptionTo(destination)}>
                                        {destination.name}</li>)}</ul>}
                         </div>
                    </div>
                    <div className='container py-4 my-2'>
                         <h2 
                         className='float-start text-decoration-underline headers'>
                         Departure Date & Time
                         </h2>
                         <h2 
                         className='float-end text-decoration-underline headers'>
                         Passengers
                         </h2>
                    </div>
                    <div className="Select input-group my-3">
                         <div class="form-floating border-end-0">
                              <select class="form-select border-end-0 dropdown-menu-start" id="floatingSelect" aria-label="Floating label select example">
                                   <option selected>To day</option>
                                   <option value="1">Tomorrow</option>
                              </select>
                              <label for="floatingSelect">Date  <AiTwotoneCalendar size="1.3em" /></label>
                         </div>
                         <div class="form-floating border-start-0">
                                   <select class="form-select border-start-0 dropdown-menu-start" id="floatingSelect" aria-label="Floating label select example">
                                        {time.map(t => {
                                             if (t.size > 0) {
                                                  return (
                                                       <option key={t.time} onClick={() =>setPassengers(t.size)} value={t.time}>{t.name} - {t.time} </option>);
                                             } else {
                                                  return <option> no bus available for that time</option>
                                             }
                                        })}
                                   </select>
                              <label for="floatingSelect">Time <FaRegClock size="1.3em" /></label>
                         </div>
                         <span className="input-group-text border-0  px-1 bg-white"></span>
                         <div class="form-floating">
                                   <select class="form-select" id="floatingSelect">
                                        {Array.from({ length: passengers }, (_, i) => (<option key={i} value={i}>{i}</option> ))}
                                   </select>
                              <label for="floatingSelect">passengers <FaUsers size="1.4em" /> </label>
                         </div>
                    </div>

                    <div className=" d-flex flex-column justify-content-center align-items-center my-3">
                         <button 
                         type="submit" 
                         className="book-btn fw-bolder border-0 py-2 px-5 my-2" 
                         disabled={!selectedStationFrom || !selectedStationTo}>CLICK TO BOOK
                         </button>
                    </div>
               </div>
          </form>
          <History/>
          </div>
     );

}
export default MyForm;
