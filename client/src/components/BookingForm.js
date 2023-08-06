import { useState, useEffect } from 'react';
import Axios from 'axios'
import { CgArrowsExchange } from 'react-icons/cg';
// eslint-disable-next-line 
import { AiTwotoneCalendar } from 'react-icons/ai';
import AvailableTickets from './AvailableTickets';

function MyForm() {
     const [stations, setStations] = useState([]);
     const [from, setFrom] = useState({});
     const [to, setTo] = useState({});
     // eslint-disable-next-line 
     const [time, setTime] = useState([]);
     // eslint-disable-next-line 
     const [passengers, setPassengers] = useState(0);
     // eslint-disable-next-line 
     const [destination, setDestination] = useState([])
     // eslint-disable-next-line 
     const [searchTermFrom, setSearchTermFrom] = useState("");
     // eslint-disable-next-line 
     const [searchTermTo, setSearchTermTo] = useState("");
     // eslint-disable-next-line 
     const [selectedStationFrom, setSelectedStationFrom] = useState("");
     // eslint-disable-next-line 
     const [selectedStationTo, setSelectedStationTo] = useState("");
     // eslint-disable-next-line 
     const [showDropdownFrom, setShowDropdownFrom] = useState(false);
     // eslint-disable-next-line 
     const [showDropdownTo, setShowDropdownTo] = useState(false);
     const handleReverse = () => {
          const NewStation = stations.find(station => station.name.toLowerCase() === to.name.toLowerCase());
          console.log(NewStation)
          const NewDestination = NewStation.destination.find(dest => dest.name.toLowerCase() === from.name.toLowerCase());
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

     // const handleSelectOptionFrom = (station) => {
     //      setSelectedStationFrom(station);
     //      setFrom(station);
     //      setDestination(station.destination);
     //      setSearchTermFrom(station.name);
     //      setShowDropdownFrom(false);
     // };
     // const handleSelectOptionTo = (destination) => {
     //      setSelectedStationTo(destination);
     //      setTo(destination);
     //      setSearchTermTo(destination.name);
     //      setTime(destination.time);
     //      setShowDropdownTo(false);
     // };
     // const matchingStationsFrom = stations.filter((station) =>
     //      station.name.toLowerCase().includes(searchTermFrom.toLowerCase())
     // );
     // const matchingStationsTo = destination.filter((destination) =>
     //      destination.name.toLowerCase().includes(searchTermTo.toLowerCase())
     // )
     useEffect(() => {
          const fetchData = async () => {
               const serverData = await Axios.get('http://localhost:3050/api/book');
               setStations(serverData.data)
          }
          fetchData()
     }, [])
     return (
          <div className='md:w-4/6 sm:w-5/6 w-11/12 mx-auto'>
               <form className="container p-0">
                    <div className="items-center">
                         <h2 className='text-white font-bold pt-3 pb-2  px-2 text-[.5em] sm:text-[.8em] md:text-[1.245em]'>Search Ticket for Your Journey</h2>
                         <div className='grid md:grid-flow-col gap-1 sm:grid-flow-col'>
                              <div className="input-group  w-full h-full">
                                   <input
                                        type="text"
                                        className="form-control border-end-0 p-3 w-full h-full"
                                        aria-label="from"
                                        placeholder="from"
                                        value={from.name}
                                        onChange={handleInputChangeFrom}
                                        required />
                                   <button
                                        type="button"
                                        className="input-group-text bg-white"
                                        onClick={handleReverse}
                                        disabled={!selectedStationFrom || !selectedStationTo}>
                                        <CgArrowsExchange size={30} className='aspect-square' />
                                   </button>
                                   <input
                                        type="text"
                                        className="form-control border-start-0 p-3"
                                        aria-label="Server"
                                        placeholder="to"
                                        value={to.name}
                                        onChange={handleInputChangeTo}
                                        required />
                              </div>
                              <div className=' w-full'>
                                   <input
                                        type="Date"
                                        className="form-control border-end-0 h-full p-2"
                                        aria-label=""
                                        placeholder="Date"
                                        value={from.name}
                                        onChange={handleInputChangeFrom}
                                        required />
                              </div>
                         </div>
                         <div className="flex flex-column items-center my-3 text-white">
                              <button
                                   type="submit"
                                   className="border-0 bg-blue-900 px-5 py-2 rounded-3xl"
                                   disabled={!selectedStationFrom || !selectedStationTo}>Search
                              </button>
                         </div>
                    </div>
               </form>
               <AvailableTickets/>
          </div>
     );

}
export default MyForm;
