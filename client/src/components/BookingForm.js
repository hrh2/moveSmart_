import { useState } from 'react';
import { CgArrowsExchange } from 'react-icons/cg';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { FaRegClock,FaUsers} from 'react-icons/fa';


function MyForm() {
     const stations = [{ id: 1, name: "Kigali" }, { id: 2, name: "Musanze" }, { id: 3, name: "Rubavu" }, { id: 4, name: "Nyungwe" }, { id: 5, name: "Akagera" }];
     const [from, setFrom] = useState("");
     const [to, setTo] = useState("");
     const [searchTermFrom, setSearchTermFrom] = useState("");
     const [searchTermTo, setSearchTermTo] = useState("");
     const [selectedStationFrom, setSelectedStationFrom] = useState("");
     const [selectedStationTo, setSelectedStationTo] = useState("");
     const [showDropdownFrom, setShowDropdownFrom] = useState(false);
     const [showDropdownTo, setShowDropdownTo] = useState(false);
     const handleReverse = () => {
          setFrom(to);
          setTo(from);
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
          setFrom(station.name);
          setSearchTermFrom(station.name);
          setShowDropdownFrom(false);
     };
     const handleSelectOptionTo = (station) => {
          setSelectedStationTo(station);
          setTo(station.name);
          setSearchTermTo(station.name);
          setShowDropdownTo(false);
     };
     const matchingStationsFrom = stations.filter((station) =>
          station.name.toLowerCase().includes(searchTermFrom.toLowerCase())
     );
     const matchingStationsTo = stations.filter((station) =>
          station.name.toLowerCase().includes(searchTermTo.toLowerCase())
     );
     const clearInputs = () => {
          setFrom("");
          setTo("");
          setSelectedStationFrom("");
          setSelectedStationTo("");
          setSearchTermFrom("");
          setSearchTermTo("");
          setShowDropdownFrom(false);
          setShowDropdownTo(false);
     };
     return (
          <form className="py-lg-5">
               <div className="form-row align-items-center container">
                    <h2 className='text-decoration-underline'>Your Journey</h2>
                    <div className="input-group my-3">
                         <input type="text" className="form-control border-end-0 p-3" aria-label="from" placeholder="from" value={from} onChange={handleInputChangeFrom} />
                         <button type="button" className="input-group-text border-end-0 border-start-0 px-2 bg-white" onClick={handleReverse}>
                              <span className='Exchange-btn'><CgArrowsExchange size="3em" /></span>
                         </button>
                         <input type="text" className="form-control border-start-0 p-3" aria-label="Server" placeholder="to" value={to} onChange={handleInputChangeTo} />
                         <button type="button" className="btn btn-danger" onClick={clearInputs}>Clear</button>
                    </div>
                    <div className="row">
                         <div className="col">
                              {showDropdownFrom && <ul className="list-group dropdown-menu border-0 rounded-0">{matchingStationsFrom.map(station => <li key={station.id} className="list-group-item border-end-0 border-start-0 rounded-0" onClick={() => handleSelectOptionFrom(station)}>{station.name}</li>)}</ul>}
                         </div>
                         <div className="col">
                              {showDropdownTo && <ul className="list-group dropdown-menu border-0 rounded-0">{matchingStationsTo.map(station => <li key={station.id} className="list-group-item border-end-0 border-start-0 rounded-0" onClick={() => handleSelectOptionTo(station)}>{station.name}</li>)}</ul>}
                         </div>
                    </div>
                    <div className='container py-4 my-2'>
                         <h2 className='float-start text-decoration-underline'>Departure Date & Time</h2><h2 className='float-end text-decoration-underline'>Passengers</h2>
                    </div>
                    <div className="input-group my-3">
                         <div class="form-floating">
                              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                   <option selected>To day</option>
                                   <option value="1">Tomorrow</option>
                              </select>
                              <label for="floatingSelect">Date  <AiTwotoneCalendar size="1.3em"/></label>
                         </div>
                         <div class="form-floating">
                              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                   <option selected>6:00AM</option>
                                   <option value="1">8:00AM</option>
                                   <option value="1">10:00AM</option>
                                   <option value="1">14:00</option>
                              </select>
                              <label for="floatingSelect">Time <FaRegClock size="1.3em"/></label>
                         </div><span className="input-group-text border-0  px-4 bg-white"></span>
                         <div class="form-floating">
                              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                   <option value="1">one</option>
                                   <option value="1">Two</option>
                                   <option value="1">Three</option>
                              </select>
                              <label for="floatingSelect">Number of passengers <FaUsers size="1.4em"/> </label>
                         </div>                      
                    </div>
                    <div className=" d-flex flex-column justify-content-center align-items-center">
                         <button type="submit" className="book-btn fw-bolder border-0 py-3 px-lg-5" disabled={!selectedStationFrom || !selectedStationTo}>CLICK TO BOOK</button>
                    </div>
               </div>
          </form>

     );

}
export default MyForm;
